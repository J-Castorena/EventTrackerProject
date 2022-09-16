package com.skilldistillery.wodtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.wodtracker.entities.Wod;
import com.skilldistillery.wodtracker.services.WodService;
@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class WodController {

	@Autowired
	private WodService wodService;

	@GetMapping("wods")
	public List<Wod> showAllWods() {
		return wodService.index();
	}

	@GetMapping("wods/{id}")
	public Wod wodById(@PathVariable Integer id) {
		return wodService.wodById(id);
	}

	@PostMapping("wods")
	public Wod addWod(@RequestBody Wod wod, HttpServletRequest req, HttpServletResponse res) {

		try {
			wodService.createWod(wod);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL(); // finds URL that submitted request
			url.append("/").append(wod.getId()); // adds wod id from newly created wod
			res.setHeader("Location", url.toString()); // sets location in http header to find new wod
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(404);
			wod = null;
		}
		return wod;

	}

	@PutMapping("wods")
	public Wod editWod(@RequestBody Wod wod, HttpServletResponse res) {
		try {
			Wod updateWod = wodService.updateWod(wod);
			if (updateWod == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			wod = null;
		}
		return wod;
	}

	@DeleteMapping("wods/{id}")
	public void deleteWod(@PathVariable Integer id, HttpServletResponse res) {
		try {
			boolean wodIsDeleted = wodService.deleteWod(id);
			if (wodIsDeleted) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}

		} catch (Exception e) {
			res.setStatus(400);
		}

	}

}

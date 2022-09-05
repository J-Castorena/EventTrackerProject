package com.skilldistillery.wodtracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.wodtracker.entities.Wod;
import com.skilldistillery.wodtracker.repositories.WodRepository;

@Service
public class WodServiceImpl implements WodService {

	@Autowired
	private WodRepository wodRepo;

	@Override
	public List<Wod> index() {
		return wodRepo.findAll();
	}

	@Override
	public Wod wodById(Integer id) {
		return wodRepo.findWodById(id);
	}

	@Override
	public Wod createWod(Wod wod) {
		return wodRepo.saveAndFlush(wod);
	}

	@Override
	public Wod updateWod(Wod wod) {
		Wod wodToUpdate = wodRepo.findWodById(wod.getId());
		if (wodToUpdate != null) {
			wodToUpdate.setName(wod.getName());
			wodToUpdate.setDate(wod.getDate());
			wodToUpdate.setDescription(wod.getDescription());
			wodToUpdate.setPersonalTime(wod.getPersonalTime());
			wodToUpdate.setComments(wod.getComments());
			wodRepo.saveAndFlush(wodToUpdate);
			return (wodToUpdate);

		}
		return null;
	}

	@Override
	public boolean deleteWod(Integer id) {
		boolean wodDeleted = false;
		if (wodRepo.existsById(id)) {
			wodRepo.deleteById(id);
			wodDeleted = true;
		}
		return wodDeleted;
	}

}

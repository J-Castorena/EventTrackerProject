package com.skilldistillery.wodtracker.services;

import java.util.List;

import com.skilldistillery.wodtracker.entities.Wod;

public interface WodService {
	List<Wod> index();

	Wod wodById(Integer id);

	Wod createWod(Wod wod);

	Wod updateWod(Wod wod);

	boolean deleteWod(Integer id);
}

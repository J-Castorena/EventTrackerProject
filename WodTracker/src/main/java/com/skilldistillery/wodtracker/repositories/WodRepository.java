package com.skilldistillery.wodtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.wodtracker.entities.Wod;

public interface WodRepository extends JpaRepository<Wod, Integer>{
	
	@Query(value="SELECT * FROM wod WHERE id = :wodId", nativeQuery = true)
	Wod findWodById(@Param("wodId") Integer wodId);
}

package com.skilldistillery.wodtracker.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Wod {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private LocalDate date;
	
	private String description;
	
	@Column(name="personal_time")
	private LocalTime personalTime;
	
	private String comments;
	

	
	
	public Wod() {
		super();
	}
	

	public Wod(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public LocalTime getPersonalTime() {
		return personalTime;
	}


	public void setPersonalTime(LocalTime personalTime) {
		this.personalTime = personalTime;
	}


	public String getComments() {
		return comments;
	}


	public void setComments(String comments) {
		this.comments = comments;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Wod other = (Wod) obj;
		return id == other.id;
	}


	public Wod(int id, String name, LocalDate date, String description, LocalTime personalTime, String comments) {
		super();
		this.id = id;
		this.name = name;
		this.date = date;
		this.description = description;
		this.personalTime = personalTime;
		this.comments = comments;
	}


	@Override
	public String toString() {
		return "Wod [id=" + id + ", name=" + name + ", date=" + date + ", description=" + description
				+ ", personalTime=" + personalTime + ", comments=" + comments + "]";
	}


	
	
	
	
}

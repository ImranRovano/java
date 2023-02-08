package com.dashboard.proj1.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dashboard.proj1.entities.MemberEntity;

public interface IMemberRepository extends CrudRepository<MemberEntity, Long> {
	
	@Override
	public List<MemberEntity> findAll();
}

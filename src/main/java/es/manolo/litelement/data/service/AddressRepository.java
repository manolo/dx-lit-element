package es.manolo.litelement.data.service;

import es.manolo.litelement.data.entity.Address;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Integer> {

}
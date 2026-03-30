package rva.services;

import java.util.List;

import org.springframework.stereotype.Service;

import rva.models.Dobavljac;
import rva.models.Porudzbina;

@Service
public interface PorudzbinaService extends CrudService<Porudzbina> {

//	Po boolean atributu
	List<Porudzbina> getPorudzbinasByPlaceno (boolean placeno);
//	Po brojcanom atributu
	List<Porudzbina> getPorudzbinasByIznos (double iznos);
//	Po stranom kljucu
	List<Porudzbina> getPorudzbinasByDobavljac (Dobavljac dobavljac);
}

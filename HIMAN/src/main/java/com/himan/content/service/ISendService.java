package com.himan.content.service;



import com.himan.content.model.MImage;
import com.himan.content.model.Message;


public interface ISendService {

	/**
	 * 
	 * @param weiBo
	 */
	
	public void sendWB(Message weiBo);

	public void deleteWB(String messageId);

	public void forward(String messageId,String zuserId);

	public void save(MImage m);

	

}

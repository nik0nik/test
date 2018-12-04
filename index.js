const {json} = requare('micro');
module.export = asunc req => {
const {request, session, version} = await json(req);
return{version, session, response:{
text: request.original_utterance||"Hello!",
end_session:false,
},
};
};

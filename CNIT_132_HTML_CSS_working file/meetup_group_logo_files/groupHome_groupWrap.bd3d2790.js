(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1143:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function r(e,t){var n=new URLSearchParams;return n.append("new_convo","true"),n.append("member_id",e),n.append("name",t),"/messages/?".concat(n.toString())}},1164:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u}));var r=n(27),s=n(330),a=(n(191),function(e){var t=e.urlname;return r.get(Object(s.d)(t,3))}),o=function(e){var t=e.urlname;return r.get(Object(s.e)(t))},u=function(e,t){var n=e.urlname;return r.patch(Object(s.g)(n,t))}},1171:function(e,t,n){"use strict";var r=n(13),s=n.n(r),a=n(17),o=n.n(a),u=n(18),i=n.n(u),c=n(24),l=n.n(c),d=n(25),p=n.n(d),m=n(10),g=n.n(m),v=n(26),E=n.n(v),f=n(5),h=n.n(f),b=n(0),M=n.n(b),N=n(29),S=n(1),O=n(30),C=n(159),k=n(100),P=n.n(k),A=n(15),H=n(1153),T=n(2),L=n(40),G=function(e){function t(){var e,n;o()(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=l()(this,(e=p()(t)).call.apply(e,[this].concat(s))),h()(g()(n),"state",{memberCounts:{all:0,pending:0,leaders:0}}),h()(g()(n),"getMemberCountsValues",(function(){var e=n.props,t=e.group,r=e.memberCounts,s=e.isMemberCountsInFlight;return{allMembersCount:void 0!==r.all||s&&void 0===r.all?n.state.memberCounts.all:t.members,pendingMembersCount:void 0!==r.pending||s&&void 0===r.pending?n.state.memberCounts.pending:t.pending_members,leadershipMembersCount:void 0!==r.leaders||s&&void 0===r.leaders?n.state.memberCounts.leaders:t.leads}})),n}return E()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.ariaLabel,n=e.className,r=e.exact,a=e.isActive,o=e.memberLink,u=e.noLink,i=e.render,c=e.useNavLink,l=this.getMemberCountsValues();if(u)return i(l);var d=c?C.NavLink:C.Link,p=c?{exact:r,isActive:a}:{};return M.a.createElement(d,s()({className:n,to:o||"","aria-label":t},p),i(l))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.memberCounts.all!==t.memberCounts.all||e.memberCounts.pending!==t.memberCounts.pending||e.memberCounts.leaders!==t.memberCounts.leaders;return Object(T.hasValidValue)(e.memberCounts)&&n?{memberCounts:{all:e.memberCounts.all,pending:e.memberCounts.pending,leaders:e.memberCounts.leaders}}:null}}]),t}(M.a.PureComponent),U=Object(S.createStructuredSelector)({group:L.h,locale:A.getLocale,memberCounts:Object(H.v)(),isMemberCountsInFlight:H.m}),F=Object(O.compose)(P.a,Object(N.connect)(U));t.a=F(G)},1188:function(e,t,n){"use strict";var r=n(3);t.a=Object(r.defineMessages)({organizedByLabel:{id:"groupHome.organizedByLabel",defaultMessage:"Organized by"},otherLeadershipSingular:{id:"orgIntroCard.andOneOther",defaultMessage:"<span className='text--secondary'>and</span> <span class='text--bold'>1 other</span>"},otherLeadership:{id:"orgIntroCard.andNumOthers",defaultMessage:"<span className='text--secondary'>and</span> <span class='text--bold'>{COUNT} others</span>"},messageOrganizer:{id:"orgIntroCard.messageOrganizer",defaultMessage:"Message"},groupLeaderless:{id:"groupHome.groupLeaderless",defaultMessage:"Currently no organizer"},becomeOrganizerDescription:{id:"groupHome.becomeOrganizerDescription",defaultMessage:"A member must step up as the new organizer or this group will close."},becomeOrganizer:{id:"groupHome.becomeOrganizer",defaultMessage:"Become the organizer"},headerOrganizer:{id:"groupHome.headerOrganizer",defaultMessage:"Organizer"},mainMessage:{id:"groupHome.organizerHandover.mainMessage",defaultMessage:'<span class="text--bold">{ORGANIZER_NAME}</span> has asked you to become the new Organizer of <span class="text--bold">{GROUP_NAME}</span>'},accept:{id:"groupHome.organizerHandover.accept",defaultMessage:"Accept"},decline:{id:"groupHome.organizerHandover.decline",defaultMessage:"Decline"}})},1209:function(e){e.exports=JSON.parse('{"en-US":{}}')},1241:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(41);function s(e){return"".concat(Object(r.l)(e),"/handover/?op=c")}function a(e){return"".concat(Object(r.l)(e),"/handover/?op=c&confirm=no&submit=Confirm")}function o(e){return"".concat(Object(r.l)(e),"/handover/?op=g")}function u(e,t){return"".concat(Object(r.l)(e),"/assistants/?op=remove_self&member_id=").concat(t)}},1288:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var r=n(41);function s(e){return"".concat(Object(r.l)(e),"/photos/")}function a(e){var t=new URLSearchParams;return t.append("pick_cover","true"),"".concat(s(e),"?").concat(t.toString())}},1292:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(1619),s=function(e){return(e||[]).length>0},a=function(e,t,n){return s(e)?t.length>0&&Boolean(n.isAtMediumUp):t.length>0},o=function(e,t){var n=(e||[]).slice();return t&&!t.isAtMediumUp?n.slice(0,r.c)||[]:n.slice(0,r.b)||[]},u=function(e,t){var n=s(e);return t&&t.slice(0,n?1:r.b)||[]}},1296:function(e){e.exports=JSON.parse('{"en-US":{}}')},1297:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(212),s="groupHome",a="ux-text-upcoming-events-rsvp-shown",o={primaryActionAvailable:[a,r.MEETUP_FONT_REGULAR_400_MARK]}},1405:function(e,t,n){"use strict";var r=n(17),s=n.n(r),a=n(18),o=n.n(a),u=n(24),i=n.n(u),c=n(25),l=n.n(c),d=n(26),p=n.n(d),m=n(6),g=n.n(m),v=n(0),E=n.n(v),f=n(29),h=n(30),b=n(74),M=n.n(b),N=n(35),S=n(1),O=n(4),C=n.n(O),k=n(3),P=n(23),A=n.n(P),H=n(14),T=n.n(H),L=n(9),G=n.n(L),U=n(7),F=n(8),D=n.n(F),I=n(1296),x=Object(k.defineMessages)({groupEventsWhatsOurNextMeetup:{id:"groupHome.groupEventsWhatsOurNextMeetup",defaultMessage:"What's our next Meetup?"},groupEventsWhensTheNextMeetup:{id:"groupHome.groupEventsWhensTheNextEvent",defaultMessage:"When's the next event?"},groupEventsWhatsYourNextMeetup:{id:"groupHome.groupEventsWhatsYourNextMeetup",defaultMessage:"What's your next Meetup?"},groupEventsStartADiscussion:{id:"groupHome.groupEventsStartADiscussion",defaultMessage:"Start a discussion"},groupEventsNeedIdeas:{id:"groupHome.groupEventsNeedIdeas",defaultMessage:'Need some ideas? <a href="{DISCUSSION_LINK}" class="link">Start a discussion</a>'},groupEventsAnyIdeas:{id:"groupHome.groupEventsSuggestIdea",defaultMessage:'Any ideas? <a href="{DISCUSSION_LINK}" class="link">Start a discussion</a>'},groupEventsSuggestAnIdea:{id:"groupHome.groupEventsSuggestAnIdea",defaultMessage:'<a href="{DISCUSSION_LINK}" class="link">Start a discussion</a> to suggest an idea.'},groupEventsJoinThisGroup:{id:"groupHome.groupEventsJoinThisGroup",defaultMessage:"Join us"},groupEventsMembersAreCuriousForOrg:{id:"groupHome.groupEventsMembersAreCuriousForOrg",defaultMessage:"Members are curious but nothing’s scheduled."},groupEventsStartIdeaForOrg:{id:"groupHome.groupEventsStartIdeaForOrg",defaultMessage:"Your members want to meetup but there's nothing scheduled."},groupEventsShareIdeaForMember:{id:"groupHome.groupEventsShareIdeaForMember",defaultMessage:"Share an idea to inspire our next Meetup."},groupEventsNudgeOrganizerForMember:{id:"groupHome.groupEventsNudgeOrganizerForMember",defaultMessage:"Sometimes organizers need a little nudge."},groupEventsShareIdeaForGuest:{id:"groupHome.groupEventsShareIdeaForGuest",defaultMessage:"Join this group to share an idea for our next Meetup."},groupEventsNoPastMeetups:{id:"groupHome.groupEventsNoPastMeetups",defaultMessage:"No past Meetups"},groupEventsNoProposedMeetups:{id:"groupHome.groupEventsNoProposedMeetups",defaultMessage:"No proposed Meetups"},groupEventsNoDraftMeetups:{id:"groupHome.groupEventsNoDraftMeetups",defaultMessage:"No draft Meetups"},groupEventsNoEvents:{id:"groupHome.groupEventsNoEvents",defaultMessage:"No upcoming events"}}),_=n(41),j=n(327),w=n(1133),y=n(1164),z=n(222),R=function(e){function t(){return s()(this,t),i()(this,l()(t).apply(this,arguments))}return p()(t,e),o()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.urlname;e.isGroupMember&&this.props.fetchDiscussionsTogglePreferences({urlname:t})}},{key:"render",value:function(){var e=this.props,t=e.isGroupMember,n=e.canSchedule,r=e.urlname,s=e.status,a=e.isGroupHome,o=e.discussionGroupPermissions,u=e.isGroupDiscussionHasErrors,i=t&&o.includes("group_discussions_post")&&!u,c=function(e){var t=e.joinUrl,n=e.discussionUrl,r=e.canSchedule,s=e.isGroupMember,a=e.status,o=e.canStartDiscussion;if(a!==U.SUPPORTED_EVENT_STATUSES.UPCOMING){if(a===U.SUPPORTED_EVENT_STATUSES.PAST)return{header:x.groupEventsNoPastMeetups};if(a===U.SUPPORTED_EVENT_STATUSES.PROPOSED)return{header:x.groupEventsNoProposedMeetups};if(a===U.SUPPORTED_EVENT_STATUSES.DRAFT)return{header:x.groupEventsNoDraftMeetups}}return r?{header:x.groupEventsWhensTheNextMeetup,message:x.groupEventsMembersAreCuriousForOrg,secondMessage:g()({},x.groupEventsNeedIdeas,{values:{DISCUSSION_LINK:n}})}:s&&o?{header:x.groupEventsNoEvents,message:x.groupEventsNudgeOrganizerForMember,secondMessage:g()({},x.groupEventsAnyIdeas,{values:{DISCUSSION_LINK:n}})}:o?{header:x.groupEventsWhatsOurNextMeetup,message:x.groupEventsShareIdeaForGuest,link:{text:x.groupEventsJoinThisGroup,to:t}}:{header:x.groupEventsNoEvents}}({joinUrl:Object(_.a)(r),discussionUrl:a?"#discussions":Object(j.a)(r),canSchedule:n,isGroupMember:t,status:s,canStartDiscussion:i}),l=c.header,d=c.message,p=c.link,m=c.secondMessage;return E.a.createElement(T.a,{direction:"column",justify:"center",className:C()("emptyEventCard",z.a)},E.a.createElement(G.a,{align:"center",shrink:!0,className:z.b},E.a.createElement(A.a,{shape:"calendar",size:"s",className:z.c})),E.a.createElement(G.a,{align:"center",shrink:!0},E.a.createElement("p",{className:"text--secondary text--small"},E.a.createElement(k.FormattedMessage,l)),d&&E.a.createElement("p",{className:"text--secondary text--small"},E.a.createElement(k.FormattedHTMLMessage,d)),m&&E.a.createElement("p",{className:"text--secondary text--small"},E.a.createElement(k.FormattedHTMLMessage,m)),p&&E.a.createElement(M.a,{to:p.to,className:"link"},E.a.createElement(k.FormattedMessage,p.text))))}}]),t}(E.a.PureComponent),W=Object(S.createStructuredSelector)({discussionGroupPermissions:w.e,isGroupDiscussionHasErrors:w.o}),V=Object(N.compose)(Object(f.connect)(W,(function(e){return{fetchDiscussionsTogglePreferences:Object(h.bindActionCreators)(y.b,e)}})),D()(I));t.a=V(R)},1619:function(e,t,n){"use strict";var r=n(13),s=n.n(r),a=n(17),o=n.n(a),u=n(18),i=n.n(u),c=n(24),l=n.n(c),d=n(25),p=n.n(d),m=n(26),g=n.n(m),v=n(0),E=n.n(v),f=n(35),h=n(29),b=n(1),M=n(44),N=n.n(M),S=n(53),O=n.n(S),C=n(8),k=n.n(C),P=n(2),A=n(1647),H=n(1292),T=n(3),L=n(4),G=n.n(L),U=n(74),F=n.n(U),D=n(14),I=n.n(D),x=n(9),_=n.n(x),j=n(16),w=n.n(j),y=n(265),z=n.n(y),R=n(1400),W=n(338),V=n(7),J=Object(T.defineMessages)({groupEventsListLink:{id:"groupHome.groupEventsListLink",defaultMessage:"See all"},a11ygroupEventsListLink:{id:"groupHome.accessible.groupEventsListLink",defaultMessage:"See all events"},a11ySeeAllPastEvents:{id:"groupHome.accessible.seeAllPastEvents",defaultMessage:"See all past events"},pastEvents:{id:"groupHome.pastEvents",defaultMessage:"Past events ({PAST_EVENTS_COUNT})"},upcomingEvents:{id:"groupHome.upcomingEvents",defaultMessage:"Upcoming events"},upcomingEventsWithCount:{id:"groupHome.upcomingEventsWithCount",defaultMessage:"Upcoming events ({UPCOMING_EVENTS_COUNT})"},schedule:{id:"groupHome.schedule",defaultMessage:"Schedule an event"}}),B=n(1405),K=n(49),Y=n(40),Z=function(e){var t=e.event,n=e.urlname,r=e.onAfterEventDelete,s=e.hideActions,a=e.profile,o=e.isProNetworkGroup,u=e.isProNetworkGroupHidden;return E.a.createElement(R.a,{onAfterEventDelete:r,event:t,urlname:n,key:t.id,render:function(e){var n=e.editEventSeries,r=e.cancelEvent,i=e.deleteDraftEvent,c=e.openEventForRsvp,l=e.closeEventForRsvp,d=e.isCanceled,p=e.isDeleted,m=e.isClosedForRsvp;return E.a.createElement(w.a,null,E.a.createElement(W.b,{event:t,hideGroupName:!0,hideActions:s,profile:a,editEventSeries:n,cancelEvent:r,deleteDraftEvent:i,openEventForRsvp:c,closeEventForRsvp:l,isCanceled:d,isDeleted:p,isClosedForRsvp:m,isProNetworkGroup:o,isProNetworkGroupHidden:u}))}})},q=function(e){var t=e.intl,n=e.urlname,r=e.upcomingEventsCount;return E.a.createElement(I.a,null,E.a.createElement(_.a,null,E.a.createElement("h3",{className:G()(ae,"text--sectionTitle text--bold padding--bottom")},r&&"0"!==r?E.a.createElement(T.FormattedMessage,s()({},J.upcomingEventsWithCount,{values:{UPCOMING_EVENTS_COUNT:r}})):E.a.createElement(T.FormattedMessage,J.upcomingEvents))),E.a.createElement(_.a,{shrink:!0,className:"align--right"},E.a.createElement(F.a,{to:Object(K.t)(n),className:G()(se,"link"),"aria-label":t.formatMessage(J.a11ygroupEventsListLink)},E.a.createElement(T.FormattedMessage,J.groupEventsListLink))))},Q=function(e){var t=e.intl,n=e.isGroupMember,r=e.canSchedule,s=e.urlname;e.media;return E.a.createElement(E.a.Fragment,null,E.a.createElement(q,{intl:t,urlname:s,upcomingEventsCount:"0"}),E.a.createElement(B.a,{className:ne,isGroupMember:n,canSchedule:r,urlname:s,isGroupHome:!0}))},X=function(e){var t=e.intl,n=e.events,r=e.media,s=e.urlname,a=e.onAfterEventDelete,o=e.hideActions,u=e.profile,i=e.isProNetworkGroup,c=e.hasMoreThanFiveUpcomingEvents,l=e.listShownMark,d=Object(H.b)(n,r),p=Boolean(d.length),m=d.map((function(e){return E.a.createElement(Z,{key:e.id,event:e,urlname:s,onAfterEventDelete:a,hideActions:o,profile:u,isProNetworkGroup:i})})),g=c?"5+":"".concat(n.length);return E.a.createElement(E.a.Fragment,null,p?E.a.createElement(q,{intl:t,urlname:s,upcomingEventsCount:g}):null,E.a.createElement("div",{className:re},m),l&&E.a.createElement(z.a,{mark:l}))},$=function(e){var t=e.intl,n=e.urlname,r=e.events,a=e.pastEvents,o=e.pastEventsCount,u=e.onAfterEventDelete,i=e.hideActions,c=e.profile,l=e.isProNetworkGroup,d=e.isProNetworkGroupHidden,p=Object(H.d)(r),m=Object(H.a)(r,a).map((function(e){return E.a.createElement(Z,{event:e,key:e.id,urlname:n,onAfterEventDelete:u,hideActions:i,profile:c,isProNetworkGroup:l,isProNetworkGroupHidden:d})}));return E.a.createElement("div",{className:G()({"margin--top":p})},E.a.createElement(I.a,null,E.a.createElement(_.a,null,E.a.createElement("h3",{className:"text--sectionTitle text--bold padding--bottom"},E.a.createElement(T.FormattedMessage,s()({},J.pastEvents,{values:{PAST_EVENTS_COUNT:t.formatNumber(o)}})))),E.a.createElement(_.a,{shrink:!0,className:"align--right"},E.a.createElement(F.a,{to:Object(K.u)(n,V.SUPPORTED_EVENT_STATUSES.PAST),className:G()(ue,"link"),"aria-label":t.formatMessage(J.a11ySeeAllPastEvents)},E.a.createElement(T.FormattedMessage,J.groupEventsListLink)))),E.a.createElement("div",{className:oe},m))},ee=n(274),te=n(1297);n.d(t,"a",(function(){return ne})),n.d(t,"f",(function(){return re})),n.d(t,"g",(function(){return se})),n.d(t,"h",(function(){return ae})),n.d(t,"d",(function(){return oe})),n.d(t,"e",(function(){return ue})),n.d(t,"b",(function(){return ie})),n.d(t,"c",(function(){return ce}));var ne="".concat("groupHome-eventsList","-noEvents"),re="".concat("groupHome-eventsList","-upcomingEvents"),se="".concat("groupHome-eventsList","-upcomingEventsLink"),ae="".concat("groupHome-eventsList","-upcomingEventsTitle"),oe="".concat("groupHome-eventsList","-pastEvents"),ue="".concat("groupHome-eventsList","-pastEventsLink"),ie=("".concat("groupHome-eventsList","-pastEventsTitle"),4),ce=4,le=Object(b.createStructuredSelector)({canSchedule:ee.a,hasMoreThanFiveUpcomingEvents:Y.M,pastEvents:Y.A,pastEventsCount:Y.B,urlname:Y.Z,isProNetworkGroup:Y.S,isProNetworkGroupHidden:Y.T,inFlight:P.getInFlight}),de=function(e){function t(){return o()(this,t),l()(this,p()(t).apply(this,arguments))}return g()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.intl,n=e.isGroupMember,r=e.canSchedule,a=e.urlname,o=e.events,u=e.pastEvents,i=e.pastEventsCount,c=e.media,l=e.onAfterEventDelete,d=e.hideActions,p=e.profile,m=e.isProNetworkGroup,g=e.isProNetworkGroupHidden,E=e.hasMoreThanFiveUpcomingEvents,f=e.inFlight;if(f.includes(Y.b)||f.includes(Y.c))return null;var h=Object(H.d)(o),b=Object(H.c)(o,u,c),M=h||b?null:v.createElement(Q,{intl:t,isGroupMember:n,canSchedule:r,urlname:a,media:c}),S=n?{listShownMark:te.c}:{},O=h?v.createElement(X,s()({intl:t,events:o,media:c,urlname:a,onAfterEventDelete:l,hideActions:d,profile:p,isProNetworkGroup:m,hasMoreThanFiveUpcomingEvents:E},S)):null,C=b?v.createElement($,{intl:t,events:o,pastEvents:u,pastEventsCount:i,urlname:a,onAfterEventDelete:l,hideActions:d,profile:p,isProNetworkGroup:m,isProNetworkGroupHidden:g}):null;return v.createElement(N.a,{className:"atLarge_section--flush"},M,O,C)}}]),t}(v.PureComponent),pe=Object(f.compose)(k()(A,!0),Object(h.connect)(le),O.a);t.i=pe(de)},1647:function(e){e.exports=JSON.parse('{"en-US":{}}')}}]);
//# sourceMappingURL=groupHome~groupWrap.bd3d2790.js.map
(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {"questions":[{"options":[{"id":"questionOption_9DBCA8ED_816D_8E4C_41D5_3667E10B5897","score":10,"text":trans('questionOption_9DBCA8ED_816D_8E4C_41D5_3667E10B5897.text')},{"id":"questionOption_9DBC98EE_816D_8E4C_41D6_87A040C032D7","score":0,"text":trans('questionOption_9DBC98EE_816D_8E4C_41D6_87A040C032D7.text')},{"id":"questionOption_9DBC88EE_816D_8E4C_41E0_3D52BDD8D97B","score":0,"text":trans('questionOption_9DBC88EE_816D_8E4C_41E0_3D52BDD8D97B.text')},{"id":"questionOption_9DBC78EE_816D_8E4C_41DA_50E138958F6F","score":0,"text":trans('questionOption_9DBC78EE_816D_8E4C_41DA_50E138958F6F.text')}],"id":"question_9DBD08ED_816D_8E4C_41E0_B68DC794F85A","canRepeat":false,"multipleChoice":false,"panorama":player.panorama_6812E873_74E6_2C5F_419C_12AFD0980581,"objective":"score1","title":trans('question_9DBD08ED_816D_8E4C_41E0_B68DC794F85A.title'),"canClose":true}],"timeout":{"score":{"label":trans('quizTimeout_7E84C074_6DBA_1C59_41C3_DA6BABFA6774.score','quizTimeout_7E84C074_6DBA_1C59_41C3_DA6BABFA6774.score.label'),"visible":true},"repeat":{"label":trans('quizTimeout_7E84C074_6DBA_1C59_41C3_DA6BABFA6774.repeat','quizTimeout_7E84C074_6DBA_1C59_41C3_DA6BABFA6774.repeat.label'),"visible":false},"title":trans('quizTimeout_7E84C074_6DBA_1C59_41C3_DA6BABFA6774.title'),"id":"quizTimeout_7E84C074_6DBA_1C59_41C3_DA6BABFA6774"},"question":{"responseDisplayTime":2000,"scoreZeroIsIncorrect":true,"ok":trans('quizQuestion_7E85E074_6DBA_1C59_41D1_BCF7D5835D2E.ok'),"id":"quizQuestion_7E85E074_6DBA_1C59_41D1_BCF7D5835D2E"},"theme":{"score":{},"question":{"window":{"mediaContainer":{"panoramaPlayer":{"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation"}}}},"timeout":{}},"autoFinish":true,"objectives":[{"visibleInScore":true,"label":trans('score1.label'),"id":"score1"}],"score":{"questions":{"correctLabel":trans('quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.questionsCorrect','quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.questions.correctLabel'),"visible":true,"label":trans('quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.questions','quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.questions.label'),"incorrectLabel":trans('quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.questionsIncorrect','quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.questions.incorrectLabel')},"submitToLMS":{"label":trans('quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.submitToLMS','quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.submitToLMS.label'),"visible":false},"completion":{"label":trans('quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.completion','quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.completion.label'),"visible":true},"title":trans('quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.title'),"canClose":true,"downloadCSV":{"label":trans('quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.downloadCSV','quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.downloadCSV.label'),"visible":false},"repeat":{"label":trans('quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.repeat','quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.repeat.label'),"visible":false},"items":{"label":trans('quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.items','quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.items.label'),"visible":true},"elapsedTime":{"label":trans('quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.elapsedTime','quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025.elapsedTime.label'),"visible":true},"id":"quizScore_7E801075_6DBA_1C5B_41AC_32AA837A3025"},"data":{"bodyScale":1,"titlesScale":1},"timeLimit":-1};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"propagateClick":false,"overflow":"hidden","borderSize":0,"data":{"defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"name":"Player926","locales":{"en":"locale/en.txt"}},"scrollBarMargin":2,"borderRadius":0,"backgroundColorDirection":"vertical","gap":10,"definitions": [{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_6984001F_74E6_1BC7_41D7_DD018331C562","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_6812E873_74E6_2C5F_419C_12AFD0980581_camera"},{"hfovMax":130,"adjacentPanoramas":[{"distance":6.46,"class":"AdjacentPanorama","yaw":-123.28,"data":{"overlayID":"overlay_9CC204DB_81AA_8655_41E0_61F12D883097"},"panorama":"this.panorama_6812E873_74E6_2C5F_419C_12AFD0980581","select":"this.overlay_9CC204DB_81AA_8655_41E0_61F12D883097.get('areas').forEach(function(a){ a.trigger('click') })"}],"overlays":["this.overlay_9CC204DB_81AA_8655_41E0_61F12D883097","this.overlay_9C929758_81AE_8254_41A4_F5B9BE8BD9B8"],"hfovMin":"150%","pitch":0,"id":"panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534","partial":false,"label":trans('panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534.label'),"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534_t.jpg","cube":{"class":"ImageResource","levels":[{"width":9216,"class":"TiledImageResourceLevel","colCount":18,"url":"media/panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534_0/{face}/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"width":6144,"class":"TiledImageResourceLevel","colCount":12,"url":"media/panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":3072,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]}}],"class":"Panorama","data":{"label":"examplepano"},"thumbnailUrl":"media/panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534_t.jpg","hfov":360,"vfov":180},{"zoomEnabled":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","displayPlaybackBar":true,"aaEnabled":true,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_6812E873_74E6_2C5F_419C_12AFD0980581"},{"class":"PanoramaPlayListItem","media":"this.panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C"},{"class":"PanoramaPlayListItem","media":"this.panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534"}],"id":"PlayList_933CA337_81BA_83DC_41DF_A285C42DBBE9"},{"propagateClick":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"borderSize":0,"toolTipShadowColor":"#333138","doubleClickAction":"toggle_fullscreen","subtitlesBackgroundOpacity":0.2,"subtitlesOpacity":1,"toolTipFontStyle":"normal","playbackBarBottom":5,"progressBackgroundOpacity":1,"toolTipBorderSize":1,"toolTipPaddingBottom":4,"displayTooltipInTouchScreens":true,"width":"100%","paddingLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipShadowSpread":0,"id":"MainViewer","displayTooltipInSurfaceSelection":true,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundOpacity":1,"toolTipPaddingTop":4,"data":{"name":"Main Viewer"},"paddingRight":0,"subtitlesBorderColor":"#FFFFFF","playbackBarBorderSize":0,"progressBackgroundColor":["#FFFFFF"],"toolTipShadowBlurRadius":3,"progressBarOpacity":1,"subtitlesPaddingLeft":5,"transitionDuration":500,"toolTipTextShadowColor":"#000000","subtitlesBottom":50,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressOpacity":1,"translationTransitionDuration":1000,"subtitlesBackgroundColor":"#000000","progressBottom":0,"subtitlesGap":0,"toolTipFontColor":"#606060","height":"100%","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeight":10,"toolTipShadowVerticalLength":0,"toolTipPaddingLeft":6,"subtitlesHorizontalAlign":"center","subtitlesPaddingRight":5,"playbackBarHeadWidth":6,"playbackBarHeadShadowVerticalLength":0,"progressBackgroundColorRatios":[0],"subtitlesVerticalAlign":"bottom","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"surfaceReticleColor":"#FFFFFF","progressHeight":10,"progressOpacity":1,"minHeight":50,"progressRight":0,"subtitlesTextShadowOpacity":1,"toolTipFontFamily":"Arial","minWidth":100,"playbackBarBackgroundColorDirection":"vertical","subtitlesBorderSize":0,"vrPointerSelectionColor":"#FF6600","firstTransitionDuration":0,"playbackBarRight":0,"progressBorderSize":0,"subtitlesTextDecoration":"none","toolTipDisplayTime":600,"vrPointerSelectionTime":2000,"toolTipShadowOpacity":1,"progressBarBorderSize":0,"borderRadius":0,"toolTipFontSize":"1.11vmin","vrPointerColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"surfaceReticleOpacity":0.6,"progressBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"progressBarBorderRadius":0,"playbackBarHeadHeight":15,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarLeft":0,"paddingTop":0,"playbackBarHeadShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowBlurRadius":0,"toolTipPaddingRight":6,"toolTipShadowHorizontalLength":0,"paddingBottom":0,"subtitlesTextShadowHorizontalLength":1,"toolTipHorizontalAlign":"center","progressBarBorderColor":"#000000","playbackBarHeadBorderSize":0,"progressBarBackgroundColorRatios":[0],"progressBorderRadius":0,"progressBackgroundColorDirection":"vertical","playbackBarHeadShadowOpacity":0.7,"subtitlesFontFamily":"Arial","subtitlesFontWeight":"normal","toolTipBorderRadius":3,"progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipBorderColor":"#767676","subtitlesEnabled":true,"playbackBarHeadShadow":true,"toolTipOpacity":1,"transitionMode":"blending","toolTipFontWeight":"normal","playbackBarHeadOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"progressBorderColor":"#000000","subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBarBackgroundColor":["#3399FF"],"subtitlesPaddingBottom":5,"playbackBarBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderColor":"#000000","toolTipTextShadowBlurRadius":3,"surfaceReticleSelectionColor":"#FFFFFF","class":"ViewerArea","subtitlesShadow":false,"playbackBarHeadBorderRadius":0,"playbackBarOpacity":1,"toolTipBackgroundColor":"#F6F6F6","shadow":false,"toolTipTextShadowOpacity":0},{"frameTransitionTime":5000,"hfovMax":130,"adjacentPanoramas":[{"distance":100,"class":"AdjacentPanorama","yaw":172.47,"data":{"overlayID":"overlay_9C6C4701_816A_83B5_41BD_7F1641D95AC5"},"panorama":"this.panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C","select":"this.overlay_9C6C4701_816A_83B5_41BD_7F1641D95AC5.get('areas').forEach(function(a){ a.trigger('click') })"}],"overlays":["this.overlay_9C6C4701_816A_83B5_41BD_7F1641D95AC5","this.overlay_9DBE58EB_816D_8E74_41CC_2F1C5BEFE426"],"hfovMin":"150%","data":{"label":"output2"},"pitch":0,"id":"panorama_6812E873_74E6_2C5F_419C_12AFD0980581","partial":false,"label":trans('panorama_6812E873_74E6_2C5F_419C_12AFD0980581.label'),"frames":[{"class":"CubicPanoramaFrame","front":{"class":"ImageResource","levels":[{"width":1536,"class":"TiledImageResourceLevel","colCount":3,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/f/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/f/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/f/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"right":{"class":"ImageResource","levels":[{"width":1536,"class":"TiledImageResourceLevel","colCount":3,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/r/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/r/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/r/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"back":{"class":"ImageResource","levels":[{"width":1536,"class":"TiledImageResourceLevel","colCount":3,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/b/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/b/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/b/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"thumbnailUrl":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0_t.jpg","left":{"class":"ImageResource","levels":[{"width":1536,"class":"TiledImageResourceLevel","colCount":3,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/l/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/l/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_0/l/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]}},{"class":"CubicPanoramaFrame","front":{"class":"ImageResource","levels":[{"width":1536,"class":"TiledImageResourceLevel","colCount":3,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/f/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/f/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/f/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"right":{"class":"ImageResource","levels":[{"width":1536,"class":"TiledImageResourceLevel","colCount":3,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/r/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/r/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/r/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"back":{"class":"ImageResource","levels":[{"width":1536,"class":"TiledImageResourceLevel","colCount":3,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/b/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/b/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/b/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"thumbnailUrl":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1_t.jpg","left":{"class":"ImageResource","levels":[{"width":1536,"class":"TiledImageResourceLevel","colCount":3,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/l/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/l/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1/l/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]}}],"frameDisplayTime":5000,"class":"LivePanorama","thumbnailUrl":"media/panorama_6812E873_74E6_2C5F_419C_12AFD0980581_1_t.jpg","hfov":360,"vfov":41.39},{"hfovMax":130,"adjacentPanoramas":[{"distance":50.45,"class":"AdjacentPanorama","yaw":-135.85,"data":{"overlayID":"overlay_9CFD46A6_81AA_82FF_41E0_520B51B239F8"},"panorama":"this.panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534","select":"this.overlay_9CFD46A6_81AA_82FF_41E0_520B51B239F8.get('areas').forEach(function(a){ a.trigger('click') })"}],"overlays":["this.overlay_9CFD46A6_81AA_82FF_41E0_520B51B239F8","this.overlay_9CA86E1C_816E_85CC_41C1_A5E307EA09BA"],"hfovMin":"150%","pitch":1.37,"id":"panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C","partial":false,"label":trans('panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C.label'),"frames":[{"class":"CubicPanoramaFrame","front":{"class":"ImageResource","levels":[{"width":2048,"class":"TiledImageResourceLevel","colCount":4,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/f/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":4},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/f/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/f/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"right":{"class":"ImageResource","levels":[{"width":2048,"class":"TiledImageResourceLevel","colCount":4,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/r/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":4},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/r/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/r/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"back":{"class":"ImageResource","levels":[{"width":2048,"class":"TiledImageResourceLevel","colCount":4,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/b/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":4},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/b/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/b/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"thumbnailUrl":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_t.jpg","left":{"class":"ImageResource","levels":[{"width":2048,"class":"TiledImageResourceLevel","colCount":4,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/l/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":4},{"width":1024,"class":"TiledImageResourceLevel","colCount":2,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/l/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"width":512,"class":"TiledImageResourceLevel","colCount":1,"url":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_0/l/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]}}],"class":"Panorama","data":{"label":"output3"},"thumbnailUrl":"media/panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_t.jpg","hfov":360,"vfov":68.48},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_6812E873_74E6_2C5F_419C_12AFD0980581_camera","media":"this.panorama_6812E873_74E6_2C5F_419C_12AFD0980581","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_camera","media":"this.panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534_camera","media":"this.panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_9DBD17EA_8196_8277_41DE_D1490CD6959D","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_9C1A1E2B_8196_85F5_41D5_DDC2F16BD534_camera"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_9D332B53_8176_8255_41D0_095303E8D314","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_9C32D48E_8176_86CC_41CE_A591755E2C6C_camera"},{"propagateClick":false,"borderSize":0,"scrollBarMargin":2,"hideEffect":{"class":"FadeOutEffect","duration":500,"easing":"cubic_in_out"},"closeButtonBackgroundOpacity":0,"backgroundOpacity":1,"shadowOpacity":0.5,"width":"90%","shadowColor":"#000000","titleFontSize":"1.29vmin","id":"window_931CD016_81AE_BDDF_41CF_CCA209C681B8","headerPaddingLeft":10,"paddingLeft":0,"showEffect":{"class":"FadeInEffect","duration":500,"easing":"cubic_in_out"},"bodyBackgroundColorDirection":"vertical","paddingRight":0,"modal":true,"bodyPaddingLeft":0,"titlePaddingBottom":5,"veilShowEffect":{"class":"FadeInEffect","duration":500,"easing":"cubic_in_out"},"closeButtonPaddingTop":0,"closeButtonBackgroundColor":[],"headerPaddingBottom":5,"backgroundColorRatios":[],"footerBackgroundOpacity":0,"bodyPaddingRight":0,"closeButtonRollOverIconColor":"#FFFFFF","bodyBackgroundColorRatios":[0,0.5,1],"scrollBarWidth":10,"shadowSpread":1,"backgroundColor":[],"closeButtonBorderRadius":11,"closeButtonPaddingLeft":0,"headerBackgroundColorRatios":[0,0.1,1],"closeButtonBorderColor":"#000000","closeButtonRollOverBorderColor":"#000000","closeButtonIconLineWidth":2,"closeButtonIconHeight":20,"veilColorDirection":"horizontal","headerPaddingRight":0,"closeButtonPaddingRight":0,"height":"90%","closeButtonIconWidth":20,"footerBackgroundColorDirection":"vertical","shadowVerticalLength":0,"headerBorderSize":0,"headerBorderColor":"#000000","veilOpacity":0.4,"layout":"vertical","minHeight":0,"footerBorderSize":0,"data":{"name":"Window22265"},"shadowBlurRadius":6,"minWidth":0,"closeButtonBackgroundColorRatios":[],"titleFontColor":"#000000","overflow":"scroll","closeButtonIconColor":"#B2B2B2","gap":10,"titleFontFamily":"Arial","closeButtonRollOverIconLineWidth":2,"titleTextDecoration":"none","bodyPaddingTop":0,"borderRadius":5,"backgroundColorDirection":"vertical","veilColorRatios":[0,1],"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"titlePaddingTop":5,"closeButtonPressedBackgroundOpacity":0,"closeButtonRollOverBackgroundColorRatios":[],"bodyBorderSize":0,"bodyPaddingBottom":0,"closeButtonPressedBorderSize":0,"closeButtonPressedBorderColor":"#000000","children":["this.WebFrame_933F332C_81BA_83CC_41D6_A0775F2D8344"],"paddingTop":0,"titlePaddingRight":5,"titleFontWeight":"normal","paddingBottom":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","closeButtonPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"scrollBarOpacity":0.5,"closeButtonBorderSize":0,"footerBackgroundColorRatios":[0,0.9,1],"titleFontStyle":"normal","veilColor":["#000000","#000000"],"headerBackgroundColorDirection":"vertical","headerVerticalAlign":"middle","verticalAlign":"middle","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"scrollBarColor":"#000000","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"footerHeight":5,"closeButtonRollOverBackgroundColor":[],"closeButtonPressedBackgroundColorRatios":[],"titleHorizontalAlign":"left","closeButtonPressedIconColor":"#FFFFFF","shadowHorizontalLength":3,"closeButtonRollOverBackgroundOpacity":0,"footerBorderColor":"#000000","headerBackgroundOpacity":0,"closeButtonRollOverBorderSize":0,"bodyBorderColor":"#000000","contentOpaque":false,"class":"Window","veilHideEffect":{"class":"FadeOutEffect","duration":500,"easing":"cubic_in_out"},"closeButtonPressedIconLineWidth":3,"headerPaddingTop":10,"titlePaddingLeft":5,"scrollBarVisible":"rollOver","shadow":true,"bodyBackgroundOpacity":0},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear","yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_6984001F_74E6_1BC7_41D7_DD018331C562"},{"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_9DD1C5B8_81AA_86D4_41CD_DBB1FBB89864"],"data":{"hasPanoramaAction":true,"label":"Arrow Black Left"},"useHandCursor":true,"items":[{"distance":50,"yaw":-123.28,"pitch":-14.73,"vfov":8.72,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.res_9C53F1CA_81B5_9EB4_41C4_47FE57567F15","horizontalAlign":"center","hfov":7.85,"data":{"label":"Arrow Black Left"},"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_9CC204DB_81AA_8655_41E0_61F12D883097"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"Info Red 03"},"useHandCursor":true,"items":[{"distance":100,"yaw":-55.94,"pitch":-14.88,"vfov":14.32,"data":{"label":"Info Red 03"},"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_933AE268_81BA_8273_41C7_EB3E871E3EAF","horizontalAlign":"center","hfov":10.27,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_9CD3C793_81AE_82D4_41CD_FA910D64AF19"],"id":"overlay_9C929758_81AE_8254_41A4_F5B9BE8BD9B8"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"Arrow Black Left"},"useHandCursor":true,"items":[{"distance":50,"yaw":172.47,"pitch":3.84,"vfov":4.9,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.res_9C5081C9_81B5_9EB4_41D9_87719CC1CA2C","horizontalAlign":"center","hfov":4.2,"data":{"label":"Arrow Black Left"},"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_9C92270D_816A_83CD_41CD_B7214106A48E"],"enabledInCardboard":true,"id":"overlay_9C6C4701_816A_83B5_41BD_7F1641D95AC5"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"hotspot"},"useHandCursor":true,"items":[{"distance":50,"yaw":-172.18,"pitch":-3.01,"vfov":3.79,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.res_9C5031C9_81B5_9EB4_41DE_A1B2E9B3FF9C","horizontalAlign":"center","hfov":3.71,"data":{"label":"hotspot"},"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_9DBD58EC_816D_8E4C_41C6_E8DB175A9BBA"],"id":"overlay_9DBE58EB_816D_8E74_41CC_2F1C5BEFE426"},{"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_9CFE46B6_81AA_82DF_41D3_C9D9781F1649"],"data":{"hasPanoramaAction":true,"label":"Arrow Black Left"},"useHandCursor":true,"items":[{"distance":50,"yaw":-135.85,"pitch":-1.92,"vfov":5.41,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.res_9C5081C9_81B5_9EB4_41D9_87719CC1CA2C","horizontalAlign":"center","hfov":5.27,"data":{"label":"Arrow Black Left"},"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_9CFD46A6_81AA_82FF_41E0_520B51B239F8"},{"width":1280,"class":"QuadFramePanoramaOverlay","url":trans('overlay_9CA86E1C_816E_85CC_41C1_A5E307EA09BA.url'),"useHandCursor":false,"height":720,"vertices":[{"class":"PanoramaPoint","yaw":173.16,"pitch":24.82},{"class":"PanoramaPoint","yaw":-148.75,"pitch":24.28},{"class":"PanoramaPoint","yaw":-150.08,"pitch":-8},{"class":"PanoramaPoint","yaw":172.52,"pitch":-7.99}],"contentInteractive":true,"data":{"label":"Web"},"id":"overlay_9CA86E1C_816E_85CC_41C1_A5E307EA09BA"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear","yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_9DBD17EA_8196_8277_41DE_D1490CD6959D"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear","yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_9D332B53_8176_8255_41D0_095303E8D314"},{"propagateClick":false,"borderSize":0,"data":{"name":"WebFrame22997"},"borderRadius":0,"backgroundColorDirection":"vertical","backgroundOpacity":1,"width":"100%","paddingLeft":0,"paddingTop":0,"url":trans('WebFrame_933F332C_81BA_83CC_41D6_A0775F2D8344.url'),"id":"WebFrame_933F332C_81BA_83CC_41D6_A0775F2D8344","paddingBottom":0,"paddingRight":0,"toolTipHorizontalAlign":"center","backgroundColorRatios":[],"insetBorder":false,"scrollEnabled":true,"backgroundColor":[],"height":"100%","minHeight":0,"class":"WebFrame","minWidth":0,"shadow":false},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_9DD1C5B8_81AA_86D4_41CD_DBB1FBB89864"},{"levels":[{"height":119,"width":119,"class":"ImageResourceLevel","url":"media/res_9C53F1CA_81B5_9EB4_41C4_47FE57567F15_0.png"}],"class":"ImageResource","id":"res_9C53F1CA_81B5_9EB4_41C4_47FE57567F15"},{"frameCount":24,"class":"AnimatedImageResource","colCount":4,"levels":[{"height":750,"width":500,"class":"ImageResourceLevel","url":"media/res_9C52D1CA_81B5_9EB4_41C2_6CD67C3BBAB0_0.png"}],"frameDuration":41,"rowCount":6,"id":"AnimatedImageResource_933AE268_81BA_8273_41C7_EB3E871E3EAF"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.WebFrame_933F332C_81BA_83CC_41D6_A0775F2D8344.set('url', this.translate('PopupWebFrameBehaviour_931D8017_81AE_BDDD_41DB_1763CF88FE17.url')); this.showWindow(this.window_931CD016_81AE_BDDF_41CF_CCA209C681B8, null, false)","id":"HotspotPanoramaOverlayArea_9CD3C793_81AE_82D4_41CD_FA910D64AF19"},{"levels":[{"height":104,"width":104,"class":"ImageResourceLevel","url":"media/res_9C5081C9_81B5_9EB4_41D9_87719CC1CA2C_0.png"}],"class":"ImageResource","id":"res_9C5081C9_81B5_9EB4_41D9_87719CC1CA2C"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_9C92270D_816A_83CD_41CD_B7214106A48E"},{"levels":[{"height":64,"width":64,"class":"ImageResourceLevel","url":"media/res_9C5031C9_81B5_9EB4_41DE_A1B2E9B3FF9C_0.png"}],"class":"ImageResource","id":"res_9C5031C9_81B5_9EB4_41DE_A1B2E9B3FF9C"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.quizShowQuestion('question_9DBD08ED_816D_8E4C_41E0_B68DC794F85A').then(function(r){  if(r && r.length == 0) return;  }.bind(this))","id":"HotspotPanoramaOverlayArea_9DBD58EC_816D_8E4C_41C6_E8DB175A9BBA"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_9CFE46B6_81AA_82DF_41D3_C9D9781F1649"}],"backgroundOpacity":1,"width":"100%","paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"mobileMipmappingEnabled":false,"backgroundPreloadEnabled":true,"paddingBottom":0,"paddingRight":0,"downloadEnabled":false,"toolTipHorizontalAlign":"center","horizontalAlign":"left","scrollBarOpacity":0.5,"backgroundColorRatios":[0],"vrPolyfillScale":0.75,"init":"this.initQuiz(this.createQuizConfig(this.rootPlayer, this.PlayList_933CA337_81BA_83DC_41DF_A285C42DBBE9), true, true); var quiz = this.get('data')['quiz']; quiz.bind('timeout', (function() { var functionCallee = function(){ this.quizShowTimeout({repeat: {visible: true}, score: {visible: true}}) }.bind(this); return functionCallee }.bind(this))()); quiz.bind('finish', (function() { var functionCallee = function(){ this.quizShowScore({canClose: true}) }.bind(this); return functionCallee }.bind(this))())","mediaActivationMode":"window","scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"verticalAlign":"top","backgroundColor":["#FFFFFF"],"height":"100%","children":["this.MainViewer"],"defaultVRPointer":"laser","scrollBarWidth":10,"scripts":{"syncPlaylists":TDV.Tour.Script.syncPlaylists,"cloneBindings":TDV.Tour.Script.cloneBindings,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"initQuiz":TDV.Tour.Script.initQuiz,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"executeJS":TDV.Tour.Script.executeJS,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"resumePlayers":TDV.Tour.Script.resumePlayers,"getKey":TDV.Tour.Script.getKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"registerKey":TDV.Tour.Script.registerKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlays":TDV.Tour.Script.getOverlays,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"openLink":TDV.Tour.Script.openLink,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"clone":TDV.Tour.Script.clone,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaByName":TDV.Tour.Script.getMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"init":TDV.Tour.Script.init,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"downloadFile":TDV.Tour.Script.downloadFile,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizStart":TDV.Tour.Script.quizStart,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initAnalytics":TDV.Tour.Script.initAnalytics,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizFinish":TDV.Tour.Script.quizFinish,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"existsKey":TDV.Tour.Script.existsKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setValue":TDV.Tour.Script.setValue,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setLocale":TDV.Tour.Script.setLocale,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"showPopupImage":TDV.Tour.Script.showPopupImage,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPixels":TDV.Tour.Script.getPixels,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"cloneCamera":TDV.Tour.Script.cloneCamera,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"playAudioList":TDV.Tour.Script.playAudioList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"mixObject":TDV.Tour.Script.mixObject,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"translate":TDV.Tour.Script.translate,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList},"layout":"absolute","contentOpaque":false,"start":"this.init(); this.syncPlaylists([this.PlayList_933CA337_81BA_83DC_41DF_A285C42DBBE9,this.mainPlayList])","minHeight":0,"class":"Player","minWidth":0,"desktopMipmappingEnabled":false,"scrollBarVisible":"rollOver","shadow":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.3.js.map
})();
//Generated with v2022.1.3, Wed Jun 22 2022
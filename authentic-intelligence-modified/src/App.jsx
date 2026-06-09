// ================================================================
// © 2026 Serge MAKOUNDOU / Culture Tour Ltd (No. 10908418)
// The Authentic Intelligence: Beyond Algorithms
// Authentic Intelligence — Holistic Ethical Governance
// CNM: Context–Nexus–Modelling
// EPI: ETHICAL Proximity Index (Environmental–Transformative–
//      Human–Inclusive–Cultural–Adaptive–Local)
// DEMAND: Data–Ethics–Matrix–Agent–Nexus–Dynamics
// www.culturetour.org
//
// All rights reserved.
// Unauthorised reproduction or commercial use is prohibited.
// For licensing enquiries: serge@culturetour.org
// ================================================================

import React, { useState, useEffect, useRef } from "react";

const LOGO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACgCAIAAACKd7kGAAABBmlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGCSYAACFgMGhty8kqIgdyeFiMgoBQYkkJhcXMCAGzAyMHy7BiIZGC7r4lGHC3CmpBYnA+kPQFxSBLQcaGQKkC2SDmFXgNhJEHYPiF0UEuQMZC8AsjXSkdhJSOzykoISIPsESH1yQRGIfQfItsnNKU1GuJuBJzUvNBhIRwCxDEMxQxCDO4MTGX7ACxDhmb+IgcHiKwMD8wSEWNJMBobtrQwMErcQYipAP/C3MDBsO1+QWJQIFmIBYqa0NAaGT8sZGHgjGRiELzAwcEVj2oGICxx+VQD71Z0hHwjTGXIYUoEingx5DMkMekCWEYMBgyGDGQCSpUCz8yM2qAAAF+1JREFUeNrtnWlwXNd158+5976ld3SjiYUACIKLxEUkxUWkSGq16V2SFyUejxO7ZMWxxxmn4sQzSSrlGiflSipTmZpUqlJeajyJNeNKZqLYTsmyR1ZkLRalWBIlkRQ3UdxBYkcDvfd7795z5sMDQJABRWrKYwms+y98IBqvu9+7v7v8zzn3PaIxJASC1WITEROxsA2xqGX5WX5Wlp+V5Wf5WVl+VpafleVn+VlZflaWn5XlZ/lZWX5Wlp+V5Wf5WVl+Vpaf5Wdl+VlZflaWn+VnZflZWX5Wlp/lZ2X5WVl+Vpaf5Wdl+VlZflaWn+VnZflZWX6Wn5XlZ2X5WVl+lp+V5Wdl+Vldi9T1emHEDAyAgAAMAMwAgIiIaPm9s8kRC4ECEWZJIQDMYiOi64nidcWPmRFRCCSmY4MTR84ODU1OTjXKUkSdhcz6/r6Ny1elvQQAEJPA62HtwOvm+bsxPAB+Zv/gI88fPz02rqlhoL59bS+Z5vnpoZHpC55L79+681d3fiifzC52hPHzd68TfjG8SiP4xvePPnPwQncR7t7S0V3MXSiNnxke+son7xcoLpTGf7z/6e8++w9LC21f+uDndqy8ZVEjvH6en8wMgFiph3/87UPPHyolE7Dzpu5b1/e/dnrwn18+nPC8ocnJWrPeU1hSSGU91xurj//R//7K4689LlAQk13/3hEM//rh0+Ml/UcPrDk3PPGhXesmKpWufOYz7931rk03ERkh5HStYgwRa991A9P8z//nz7rySzb2bl7Uo3DRz5+x23z2wMSff+fE1/7d6i03tjPMGU9gMFFETx/aP1GbyqS8R176yYXKOQM1lGEtHF/TufKvf/1vPJWARehH4/lz0Y8/IZCIfvDk+M6N+S03tsc4mZkZRqZKvuseGTz37JEj56fOnZ86CzKUyjAwkU56ycPDrz517LEPbPgYkUEhbf7l7Vj5AAbHgrPDwbu3t8e/AgADCIERmR/te+nE8PCStqxmjRIdpRgIkBkImEDAE0d+yMC4aOdPtcj5MSKeutBwHLihL4UIAGiIEeD0yNiP97324htHRytjhA2pwkI6M92aACQAAmBi4ynn1OSxcmOyLVlkpsVI8Xrwn5OVRiYp0omZvigFCoHPHjpx/PzIn3zqE79z730rOju3r1z//ptvU4iALAQKgQIZkMqtyanmZDxk7fh7m/ogAjHFkyciDE9Wvr/34M+PnwQR/M9/fvJ3f+W+mwcGzpdGv/6T74QUag4jrmmuKqXbMrlGa5JY2/jh7VRnIVmpD0/Xwq6CE2n6xiMv7D16KpdFTfW9r48MfnuomPVu6Olpb2s7OXn83Rt2R6a+omPZi2eeYWydN/WESsE8y2rnz19i9IMIAKv6UgB0+FQZAKrN4MzodFsmKZCVFAnPGSyNvXDy8N8+/b2OXLE9ndt3ct/NyzY9eMdnv/aR/+IpN+3llmSWzn2U5fdL5gfM3Jn31g6kfvLCMAPl0/7tG/vCsGXIhFEIQI4SmYTvOnKiXLp363tv6F5119o7NelsMnd64vVty29zpEtkFukIXPT+Ja7r/eqe3sOnJp585TwifmrP1r/43L2/dc8dnW0pTQaYNEWuow6eP/LMkec+uvWeYqaohHro+a+PV0c/vu3BmY5g58+3K35n5g0r8h++s/evHn7l6OC47zpr+7reu/mmj+3e3mg1hAQARsRm2CCgFV0rAGDvG09/86n/+rk7v9xfWL2o82fXxf4JRGZ48J6129YU/+Abjz976FT88tZVKzvyuUhHUkArbG7sXfOtz/7l0rbux1770e/9/ec/uPH+B3b9NjOJxVzLvR78JwIwggT4w1/b8d8edb/23Sd2ru/8+J1bOvK5hCvLgQZkANqxevP5yfPffPKbTx977N/c+onfe99XgBHE4vWeANdN/XZe9qT5/JHBf9x7eGhyJJ3k0dqIgZrmKotWysep+uiKrt4v7vnC1oFti/2Sr5P6LTMBAwoR6fpjT//pi8d/7GYLbcUNDd19drTRiAIGk3L9ruySnvaOHatv7sy3nZ48uvfk40dH929bdsdnd/6+QImw+EbhIq8/MMdjDlEAwoVzP3v8yf90aPC5putPVU5OD77YdF03kREgEVwncFYXPnj3pj0P/fwvDwy9ONoYrOsaMGW8HBFJKRfvFLpo+SEiSgAoDb90+KVvvnb44RK1UsmCBvYRU6hYOkYrzRFhYzyYOjp8IJ9+7AeHHkp4SU/6e1Z+7KM3fXrnwB4lHAZevPOPWpxjz+jmxNSppy4c/LtzZ56ajmrCz7gq3SIDQiAIYlpZXLuuZ2d7qj3ppSrNque433/tf3gqccvSuz+57Qu7Bt4zz/5Y//LLDNcRw+q5k//97nrpVFVC3XWr0q+AKCNMM0+RnkaooiyjJOn40k95aSnU+enTvYVVv7nrD9639n6JCgCIjUCxeGfOa/cvPFMnRTG76iC8jQEvEwOPPvu1wSf+pOGIqpuooZwIG1OAnO4R6aWQyDcAawLKYb3WmG5Sw7D+0PpPPLDzy1k/D8DEJFBedXVdEO07J016bfyY5qG6eElva7Vz5jTGDv39iZ/9+djYwSmAdP/ta2/5Ql//7kyqWwgnPs6wjkxQbZURsJjuBgBDRgqxqAO+t8KPCVAwR5U3Hm+OH9VhFYRyUx2ZZbsSHRvmteZlwfTcqJ37DS89DC/v6wtVT+dver/sjcwMwIhCR/Wh449Mly+s2/55pTIXI4qZsXKxhxETzhs9zJef+ezBDIDN1vR05YJAMbtDI34XI8piYYWc7R/MzEAIAhHjfYiX5uHmtnPA/Phk/sUiYHwtC7bSm4/1q/FjAhTNsUMTr35HCBBOEoVkZk2aWlW3sLp7+xcA5WLopxpRIOK1DLt4Q8bghX0vHfw7x/GIGRAYEBgJjJKJ9+z6UsJvi9nN6x8UZyJnrSy++czx/5SXeEvxHzOgaI4emHjxW26hl6IAhAAmAJDClenOqDZ0fu9f9N72ZR02iQIEjA298toAgCjUrTKiAEQm4yTyOqgSG0QEIumkpJOc+6r61KmwWRIoGefGBBIZN9meyHRHYVWgZGZA9Px83EmDVmnmUDLKSRtqVUqnYY4QAgDG7ZvL97tuW7yYad0Kw6oQCgBaQbnRmBRCMgMgAcslxTVKeXETO8pLJ9uV48bLIAAyIDNJ5cetGX/48MTxw6d+2mhNEYBS/kD35vUDd891gkZQIdbxBSnp+G4GALQJGkFNoEBEwyabKIxXLpTqo1I4AASAMWFi8J3EsvYbEMXsfQFvIX5gBuCgXNr/XbfQS0ETlcMMRjgIwCZCFsJJRPXR8tm9JpiuDB9A6QoJMtG7dPOnASAsnxvc/x0hk24i0ahOD+z4/MjRf6pXJvxUOmhM51e8p7P/dmaKqY+de648/LJwkjw3qSHqsL6k/45UfsXg8Uc8PxuGgRRq3Y7fkipJJjzy8t+iZGYZBOXV636lXDp+5o3HMvnlQVBFlASAwAzIzMborp5ta9d/HIDHRg++fuzRTK6j2WxNlU96blKqJDMxArPcfeu/T6tOZkaEyESN5rRjPGZixPicDJOUPrOJ4f38tf91eujlTKogUCIiUXTo9JPHzv78nt1fdFUGAF448ki5MWIMCsk9xRu233gfAA5PnXnmwMO+n3YcrxE07tvx2e+/8HVHOQhKUwSANLviGCZE9Z7196/qXP8mCNUV5hBRfuMnQgrSEUrFxEyhaQUM5CTayAQMmOrZkem5ZfLIw0Ahxx7VRBctom4yCDaCdROA2ISsW2wc1k2gaP6y4LgpL5lH6QEQAzAgopDKdbw0U0SmxcY3piXYmTtBowMEBpZGt8hESiWLnesr5eFkukhkeC40IiOUGhl6OQxrmzY/aEykdYtMYEwTgBLJgpQJZgJgBimEmLOXuUz3+hvvHZ964+TZZ4TwAACEvHnthz03K6WHiPsOf29w5EAhtzSMWojxBn5OOBkC88Pn/uojt/9HJT1NoTah1iiBDJm5yDXSLWVcFGhMGEat7rZ+TeFUvdSWKmoTMQoGZkBjtHLcf3rloY9ufWBlx7orTaRqIYss2DSD8SOofCYCISmqp5bdlu7baYLpyUP/yEiZ5Xe1Lb9rdg2WgALwUruB8uJP7ERQAMYH47xYDnSrGtbGHT/HiPHazgBBYzoKqm6iPZ6Ecd67Zlb22N6gBAQhncr0YCLdHUUNJiOkE/cDZjKaksn2ifGjlcpZ103jzB2cikxUrY5ImQRgBmZQRDTHL5vpzma6c9muemNEiIRARumsX/WB+Nsnpk+fHtqXTRXDsIWIUioJGJpACAASDOG+Y4/euv5+YMb4LkTE+SkCRInzpCmcqIx2tS8fmT6f9FJEhgGJSQrZDJsduaVPH3u0v7g6jlmvgV8cIJcHdViVfhYRTdjIDNyVXfUBAFDJ4tLb/kN97EiqcyMbjVLNLsu80FrNl/6JL/OrMZG2pVsSuWXl8cNBc5wYUKDjF4rL3p3M9QatqYuu7QoLNQIDk+ulg1YZERyv0GyOCOEQk1IxHqOUOzJyIN82wEwAaCjMpLvXrfswosfAiGAMuW5mnlk1CBgE9ShqCYGIjGRaQdVzU4ji+Jm9vps0pAEAhag3ywisnKQ2kZDKVf65scPb190nhbqCYeHLHErKz41NDbal2pvNRkgBIyILdlhJRaRD0xosnRworllwCKoFPZJplgiEAEYhQTqp/tuYCWcmN5Xq3MhMv4ggCgGgrXMDAITNCYqmI0KpIJnu7F75LgAYPfcv12jYmEkI5fuZUuncku6biTWiU5k6IV2XTCSVo4NqpAOYHbaawkZjWgiPAQyZVKrozlgqjKeU2LLOCmb/IbRpTZUHHelFpKV0gqh155YHMsn2vQf/oVIfJSKlnMi0xstnHMe/UhLgskaITJjPLGmGjVYYLO9YYzhqRc3xxnBSuWEUCiErrfKVzOsV/CcFjnAYQCBHwkHpxeRxLvEvJF8SGl0rrQW+ymgUwugWmYBJEKKJWvFAufQtfJWvQQyCWibb7Se8oNWSApXjMgHGm5xwJjhjZiFUrT5++OgPpEwCQGRa7e1rlnZtvBZ7X2tMhlEj6bY5wqvWJ2/b/OtL2lYAwJ5tv/G9p//MdV0iMsZUGyWBgq98wpeGw6gpIjZdhaXgGCRGYEe6hoyQko1+kwztFfjJREihAx4xCt1k3WBHzazTKBElXH7bXPyoADEbO7+FHEfcr2fdP86+JC65TAaYaX2K3SAA/auGYCGU1q16dTgMK4ASERkYUemo4bhppTxgAgRmdpSXyS6VMgHAkQnTqcI1VgANaWYWQkSRRiFz6U4iw8BSqKTXFnFNCAcBic1cXM4AiGImgTAvo3FZt0YUleZ0U9ci1gLkTIMKGQW1tmT7lfLsYsFRopJFhSAAwWgQUD72I0QBKBFl1JqcOvXTGTPCjEIyG0BBIExYiQtyRjfIRFJINiSERBQwL9/BTEwm/pmXo1ioF0mHyZAxjuuFQS2+SJRS64ZECcxEJIXki5/MiAjoIDgCFQo0RjtuotmYWrp0m9YRzMwiaEzUaE40m6VGc6rRmGwFlWvsbY7yhJBkDAoBAOfHjgohpVCtqFJtjkt0DRkAlsJ1lCImIQBRVptTAgWiCHSTmISQTIyAcYrn4vWiFKgkKmZwlGPIAKIUqje/fCbtfPXxh8jMTrZP+m1sQkYhpNccPzy+71vJnp2mNVk+9QQIETWnijd+CFUCVZpJS0cycNQcGzvysJcdmHjjUS9ZMMaQBqE85WeJ9KyBZOWlUUgECXCVuTeRyrMxjMwmVK53dN+3O/ruGL/wvOs4Ogyl4wtg18/XqsMIOBc2CCGl40nphEGUSqUnJ04sW7Y7ne6ZKp2Nu5c2YVvbwI7tvwHgxP1JzcsnvPn8n0m2e17WkDGkk1720MkngrCVSrS/dupx300EYdNxPCGdQqa7UpswZBwvAQzj5cEXX/9xLtXx6smfZjP5SAeAUikv6aYvhhYAKIRC15EuAYc69JKJE8PHPn3blwRKvsJ9wmrBzBkKJ9G9pXbmKeGmAYWQjq5dKB34G0Ahk21sqDX6ykhzov2GexNL1pbPPw9MCCCFqo28Wj77vJPOExmBwpiWnxtAkWbSc7Pl+LEfhtNnmUIiU1h2RzK3/EqpLD/d43pZJg0ggMHo6skDD/mZAhEJ6ZIJpZtMpXvGh18BRGBAAUxGR0G1fJZYE4nJyZN9y3av3/gpAI4jPGAWQrZapdNnfiaEz8yATAwrB97te7mrprgQnY7CwIXxw7GFcR3/9bPPhCbKptvDKJBSGTIJN5NPLy1nJoAZGQjYcfzjQy+HUTOTbo9MJFCFJuhqG1DSJzZzZjwykeZwvDEiUAZRcGbi5Bf3fLUvv+JNsmgLvIpCAnNmxbsQfUDBOkIhCYVK5kWijQkYQTqpYOxwY+xQsn2N9PIIYLQGoYTy3FSeCZARpTJho9B/O8Q+FuMEsgimBxuTb9QnjlfHj0VhFedWhDmfN9OLjFR+vmuTiZrAIIRi4mS2gxmkdJmMMUGhuBaFIjKAAlEQUSJZXLfpM8WOLWEQSOl292wWKkEczubDERCEkGFYGxrePzJ6cHj0wPDIwZHRw8YEl6Sc4/Xm4ildTJ2vGbgrjFrK8ZgJUfpeOpsqkDFSKCXdequytn8XAPZ1rPPcNAjQJhKAnnKzyTwTAaNSThC11i+7lZni9I1E1CZa17Ptw1sf9ESCDaXczIaebeV6+bKU99X5zQblfnHH56PqBEoJTALRkAYmRBbSDetjya5N+VXvY6aujZ8MquOOnwAmYDBsAFg4blibyHbfkmq/ESBi0qwjpohMyMpFlRZOWrppFDJO+TJpMhGZkExEZOJ5kJl6V71fyjRzFJt6Y8J42wQDMbgr13xkJpdrAqLQmABA+H5u2co9XqKg3DSArJTPlSaPx4lsowNjtNERM3tu2nGTrpt23bTrpP51Byc2xoTGhNpEmsKZxzgBpxLtW9bcN1o6m/RTzAaAjdGA6Civ3ppekutf2387MUnh7L7pY6XySMJPExMDGDbA4Lt+qTa6rm9HR65Pm9CQ1ibSpEMTuDKRTRQ39e5yhR/f1X1k6BVDGq+8TVd+9atfXWhhRGCSXi7du7V+4VXTmhIIyAhMZELdmM4tv2vJxl+Lu6vy84niDdNnn2OKZt26DuulXN/O7g3/lokQsV46Dcp3kwWhEq36GCJEuhEG9WzH+kSmGwAa5fMALNycm8h6qa5c8cZ40zSi7Oi7ZWLoYKs+LqQEBgATBlXptm3e9TtCJhChXhshrZWXc910ItVZ7FjrOqlq5byQnp8oOE5aqWS+sKLZKDWaU+l0h1JJbVpR2DTGRFEQ6SCKwr6eba6bnk3BMCK2gkq9MZHw8r6X8f3s0o4NUjqIyMyFXF862X5i8CUABhQMbIypNiZ7iuvetfUzzCxQMHMmUejM9x89+wKhQUQGMKTLtcmb+m/fteYeZgaEodIZz0lm/Lwj/Z78ikKmw3O80enBXLI94+eZobewPOllGPgy/8mzebar1P8AoDF6oDmy3zSmQTpOrjfbv1v67Rcn5ZnD9NSppxqTJ8hETmpJW/9uP7ts3sRtLvbrqM6kY6MknLQQ7mwJZn697PKi8eTI/smRV4Og5rqp9q5Nxe6t8/664Hs5zujP+lI5/xXiKIqaFx+OBuA6Gby8HMYAxBcTd+Kyso42zaNnfjYxNWiMTqeLq3u3t+eWzWQF5x1GrA+efma4dMYYnct03LRsVz7dOZeSZiC8WACciaAYaP5ZLLj4XeP+ibgMi1epS11Spr967erai+xzhdLLPmrWT79tlfQFr47YXLYz4wqH/QLuuHgr+3eZ4gocMAMCoFgwloxz+XH1ZjYkv4bkwzW3F1w8B/xF7N7ga0kPXbVd5s5qtkq8UFvPnTwwXqH1/n/ys3qn7n+xz29d3LL8LD8ry8/K8rP8rCw/K8vPyvKz/KwsPyvLz8rys/ysLD8ry8/K8rP8rCw/K8vP8rOy/KwsPyvLz/KzsvysLD8ry8/ys7L8rCw/K8vP8rOy/KwsPyvLz/KzsvysLD/Lz8rys7L8rCw/y8/K8rOy/Kwsv+tfCmb+O1KrRaYYmiKy8Oz8aWX5WVl+lp+V5Wdl+VlZfpafleVnZflZWX6Wn5XlZ2X5WVl+lp/VO0D/FylkyE0mxs3zAAAAAElFTkSuQmCC';

// ── TRANSLATIONS ──────────────────────────────────────────────────────────────
const T = {
  en: {
    tagline: "A holistic ethical governance approach",
    author: "Serge MAKOUNDOU",
    company: "Culture Tour Ltd",
    nav: ["Framework Hub", "EPI Calculator", "Barcelona Dashboard", "DEMAND Visualiser", "Intelligence Brief"],
    navShort: ["Hub", "EPI", "Map", "DEMAND", "Brief"],
    hub: {
      title: "The Authentic Intelligence: Beyond Algorithms",
      sub: "",
      intro: "A holistic ethical governance approach that positions human judgement, community context, and ethical accountability as indispensable complements to artificial intelligence.",
      pillars: "Three interlocking pillars",
      cnmTitle: "CNM", cnmFull: "Context – Nexus – Modelling",
      cnmDesc: "A three-layer meta-framework ensuring AI decisions are grounded in human context, systemic connections, and ethically governed modelling.",
      epiTitle: "EPI", epiFull: "ETHICAL Proximity Index",
      epiDesc: "A seven-dimension scoring instrument that evaluates every AI decision against Environmental, Transformative, Human, Inclusive, Cultural, Adaptive, and Local criteria.",
      demandTitle: "DEMAND", demandFull: "Data – Ethics – Matrix – Agent – Nexus – Dynamics",
      demandDesc: "The operational cycle that governs how data flows through the ethical matrix, how agents interact, and how dynamic conditions are continuously reassessed.",
      quote: "Authentic Intelligence is the natural guardrail for Artificial Intelligence.",
      learnMore: "Explore the EPI Calculator →",
      requestAssessment: "Request an Assessment",
      requestEmail: "Email",
      requestWhatsApp: "WhatsApp",
    },
    epi: {
      title: "EPI Live Calculator",
      sub: "Seven-dimension ethical scoring",
      intro: "Adjust each dimension score to assess the ethical quality of any AI-driven decision. A single dimension scoring 35 or below triggers an automatic BLOCK.",
      verdict: "EPI Verdict",
      composite: "Composite Score",
      reset: "Reset to 50",
      blockBy: "Blocked by",
      dims: {
        E: { label: "Environmental", desc: "Ecological protection & climate action" },
        T: { label: "Transformative", desc: "Systemic positive change" },
        H: { label: "Human", desc: "Dignity, wellbeing & rights" },
        I: { label: "Inclusive", desc: "Equity across all groups" },
        C: { label: "Cultural", desc: "Heritage & community identity" },
        A: { label: "Adaptive", desc: "Reversibility & human control" },
        L: { label: "Local", desc: "Community-rooted decisions" },
      },
      thresholds: "Block ≤35 · Review 36–49 · Pass ≥50",
    },
    barcelona: {
      title: "Barcelona Dashboard",
      sub: "Tourism Pressure Intelligence System",
      intro: "The CNM framework applied to Barcelona's overtourism crisis. Each district is assessed for tourism pressure and filtered through the EPI.",
      pressure: "Pressure Level", epiScore: "EPI Score", status: "Status",
      high: "Critical", medium: "Elevated", low: "Managed",
      legend: "Tourism pressure zones",
      selectDistrict: "Select a district to view its EPI assessment",
      district: "District",
      recommendation: "CNM Recommendation",
    },
    demand: {
      title: "DEMAND Cycle",
      sub: "Operational decision pipeline",
      intro: "Follow a decision through the complete DEMAND cycle — from raw data to ethical output. Each stage is governed by Authentic Intelligence principles.",
      stages: [
        { letter: "D", word: "Data", desc: "Raw material contextualised within its human and environmental situation — not extracted from it." },
        { letter: "E", word: "Ethics", desc: "EPI scoring applied before any modelling begins. Ethics governs the process, not merely the outcome." },
        { letter: "M", word: "Matrix", desc: "Analytical structure mapping relationships between variables, stakeholders, and systemic impacts." },
        { letter: "A", word: "Agent", desc: "The human decision-maker whose authority and accountability the system serves. Never removed." },
        { letter: "N", word: "Nexus", desc: "The specific intersection of context, data, and ethics defining this unique decision environment." },
        { letter: "D", word: "Dynamics", desc: "Continuous reassessment cycle ensuring DEMAND remains responsive to changing conditions." },
      ],
      next: "Next stage →", prev: "← Previous", restart: "Restart cycle",
      stage: "Stage",
      of: "of",
    },
    brief: {
      title: "Intelligence Brief Generator",
      sub: "CNM output in practice",
      intro: "Select a context and the system generates a sample CNM Intelligence Brief — showing what the real deliverable looks like.",
      sector: "Select sector",
      context: "Select context",
      generate: "Generate Brief",
      generating: "Generating brief…",
      briefTitle: "CNM Intelligence Brief",
      poweredBy: "Powered by Authentic Intelligence · CNM Framework",
      dashboard: "Dashboard",
      dashboardTitle: "EPI Sector Dashboard",
      radarTitle: "Dimension Radar",
      barTitle: "Score Breakdown",
      benchmarkTitle: "Sector Benchmark",
      avgScore: "Average EPI Score",
      blockZone: "Block zone ≤35",
      passZone: "Pass zone ≥50",
      sectors: ["Tourism", "Financial Services", "Healthcare", "Urban Planning", "Education", "Climate Change", "Cultural Heritage", "Quality Management"],
    },
    footer: {
      rights: "All rights reserved",
      framework: "Authentic Intelligence Framework",
      contact: "serge@culturetour.org",
      website: "www.culturetour.org",
    }
  },
  fr: {
    tagline: "Une approche de gouvernance éthique holistique",
    author: "Serge MAKOUNDOU",
    company: "Culture Tour Ltd",
    nav: ["Cadre CNM", "Calculateur IPE", "Tableau de Barcelone", "Cycle DEMAND", "Note d'Intelligence"],
    navShort: ["CNM", "IPE", "Carte", "DEMAND", "Note"],
    hub: {
      title: "L'Intelligence Authentique",
      sub: "Au-delà des Algorithmes",
      intro: "Une approche de gouvernance éthique holistique qui positionne le jugement humain, le contexte communautaire et la responsabilité éthique comme compléments indispensables à l'intelligence artificielle.",
      pillars: "Trois piliers interdépendants",
      cnmTitle: "CNM", cnmFull: "Contexte – Nexus – Modélisation",
      cnmDesc: "Un méta-cadre à trois couches garantissant que les décisions IA sont ancrées dans le contexte humain, les connexions systémiques et une modélisation éthiquement gouvernée.",
      epiTitle: "IPE", epiFull: "Indice de Proximité Éthique (IPE)",
      epiDesc: "Un instrument de notation à sept dimensions qui évalue chaque décision IA selon des critères Environnementaux, Transformatifs, Humains, Inclusifs, Culturels, Adaptatifs et Locaux.",
      demandTitle: "DEMAND", demandFull: "Données – Éthique – Matrice – Agent – Nexus – Dynamique",
      demandDesc: "Le cycle opérationnel qui gouverne la façon dont les données traversent la matrice éthique, comment les agents interagissent et comment les conditions dynamiques sont continuellement réévaluées.",
      quote: "L'Intelligence Authentique est le garde-fou naturel de l'Intelligence Artificielle.",
      learnMore: "Explorer le calculateur IPE →",
      requestAssessment: "Demander une évaluation",
      requestEmail: "Email",
      requestWhatsApp: "WhatsApp",
    },
    epi: {
      title: "Calculateur IPE en direct",
      sub: "Notation éthique à sept dimensions — Indice de Proximité Éthique",
      intro: "Ajustez chaque score de dimension pour évaluer la qualité éthique de toute décision pilotée par l'IA. Une seule dimension à 35 ou moins déclenche un BLOCAGE automatique — quelle que soit la valeur des autres dimensions.",
      verdict: "Verdict IPE",
      composite: "Score composite",
      reset: "Réinitialiser à 50",
      blockBy: "Bloqué par",
      dims: {
        E: { label: "Environnemental", desc: "Protection écologique & action climatique" },
        T: { label: "Transformatif", desc: "Changement positif systémique" },
        H: { label: "Humain", desc: "Dignité, bien-être & droits" },
        I: { label: "Inclusif", desc: "Équité pour tous les groupes" },
        C: { label: "Culturel", desc: "Patrimoine & identité communautaire" },
        A: { label: "Adaptatif", desc: "Réversibilité & contrôle humain" },
        L: { label: "Local", desc: "Décisions ancrées dans la communauté" },
      },
      thresholds: "Blocage ≤35 · Révision 36–49 · Passage ≥50",
    },
    barcelona: {
      title: "Tableau de Barcelone",
      sub: "Système d'Intelligence sur la Pression Touristique",
      intro: "Le cadre CNM appliqué à la crise du surtourisme à Barcelone. Chaque quartier est évalué pour sa pression touristique et filtré par l'IPE.",
      pressure: "Niveau de pression", epiScore: "Score IPE", status: "Statut",
      high: "Critique", medium: "Élevé", low: "Géré",
      legend: "Zones de pression touristique",
      selectDistrict: "Sélectionnez un quartier pour voir son évaluation IPE",
      district: "Quartier",
      recommendation: "Recommandation CNM",
    },
    demand: {
      title: "Cycle DEMAND",
      sub: "Pipeline de décision opérationnel",
      intro: "Suivez une décision à travers le cycle DEMAND complet — des données brutes à la production éthique. Chaque étape est gouvernée par les principes de l'Intelligence Authentique.",
      stages: [
        { letter: "D", word: "Données", desc: "Matière première contextualisée dans sa situation humaine et environnementale — et non extraite de celle-ci." },
        { letter: "E", word: "Éthique", desc: "La notation IPE est appliquée avant tout début de modélisation. L'éthique gouverne le processus, pas seulement le résultat." },
        { letter: "M", word: "Matrice", desc: "Structure analytique cartographiant les relations entre variables, parties prenantes et impacts systémiques." },
        { letter: "A", word: "Agent", desc: "Le décideur humain dont l'autorité et la responsabilité sont servies par le système. Jamais supprimé." },
        { letter: "N", word: "Nexus", desc: "L'intersection spécifique du contexte, des données et de l'éthique définissant cet environnement de décision unique." },
        { letter: "D", word: "Dynamique", desc: "Cycle de réévaluation continue garantissant que DEMAND reste réactif aux conditions changeantes." },
      ],
      next: "Étape suivante →", prev: "← Précédent", restart: "Redémarrer le cycle",
      stage: "Étape",
      of: "sur",
    },
    brief: {
      title: "Générateur de Note d'Intelligence",
      sub: "Production CNM en pratique",
      intro: "Sélectionnez un contexte et le système génère une Note d'Intelligence CNM — montrant à quoi ressemble le livrable réel.",
      sector: "Sélectionner un secteur",
      context: "Sélectionner un contexte",
      generate: "Générer la note",
      generating: "Génération en cours…",
      briefTitle: "Note d'Intelligence CNM",
      poweredBy: "Propulsé par l'Intelligence Authentique · Cadre CNM",
      dashboard: "Tableau de bord",
      dashboardTitle: "Tableau de bord IPE",
      radarTitle: "Radar des dimensions",
      barTitle: "Détail des scores",
      benchmarkTitle: "Référence sectorielle",
      avgScore: "Score IPE moyen",
      blockZone: "Zone de blocage ≤35",
      passZone: "Zone de passage ≥50",
      sectors: ["Tourisme", "Services financiers", "Santé", "Urbanisme", "Éducation", "Changement climatique", "Patrimoine culturel", "Management de la qualité"],
    },
    footer: {
      rights: "Tous droits réservés",
      framework: "Cadre Intelligence Authentique",
      contact: "serge@culturetour.org",
      website: "www.culturetour.org",
    }
  }
};

// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const DIMS = [
  { id:"E", color:"#2D7D46", light:"#e8f5ee", icon:"🌿" },
  { id:"T", color:"#1A5FA8", light:"#e6f1fb", icon:"⚡" },
  { id:"H", color:"#A0522D", light:"#fdf0e8", icon:"🤝" },
  { id:"I", color:"#6B3FA0", light:"#f3eef9", icon:"⚖️" },
  { id:"C", color:"#B5451B", light:"#faece7", icon:"🏛️" },
  { id:"A", color:"#0F766E", light:"#e1f5ee", icon:"🔄" },
  { id:"L", color:"#854D0E", light:"#faeeda", icon:"📍" },
];

const BARCELONA_DISTRICTS = [
  { name:"Barceloneta", pressure:92, epi:28, status:"high",
    recommendation:"Immediate tourist density caps required. EPI Cultural score (24) triggers automatic block on further accommodation expansion." },
  { name:"Gothic Quarter", pressure:88, epi:31, status:"high",
    recommendation:"Residential conversion to tourist use blocked by EPI. Priority: protected local resident zones and cultural heritage preservation." },
  { name:"El Born", pressure:76, epi:44, status:"medium",
    recommendation:"Review status. Transformative score (38) signals insufficient benefit flowing to local community. Redistribution mechanisms needed." },
  { name:"Gràcia", pressure:64, epi:58, status:"medium",
    recommendation:"Pass with monitoring. Strong Cultural (72) and Local (68) scores. Adaptive dimension (48) requires quarterly review mechanism." },
  { name:"Poblenou", pressure:48, epi:67, status:"low",
    recommendation:"EPI pass. Innovation district model successfully balances tourism with local economic development. Replicable framework." },
  { name:"Sant Martí", pressure:42, epi:71, status:"low",
    recommendation:"Excellent EPI performance. Community-led tourism governance model scores high across all seven dimensions." },
  { name:"Sarrià", pressure:35, epi:74, status:"low",
    recommendation:"Strong pass. Low pressure, high community benefit. Recommended as model district for sustainable tourism governance." },
  { name:"Les Corts", pressure:55, epi:62, status:"medium",
    recommendation:"Conditional pass. Inclusive score (52) approaching threshold — monitor for equity impacts on long-term residents." },
];

const BRIEF_TEMPLATES = {
  Tourism: {
    context: "Overtourism pressure in historic district",
    cnm: "Context layer identifies critical pressure on residential fabric and cultural heritage assets. Nexus maps flows between accommodation platforms, transport networks, and local community displacement patterns. Modelling projects 34% resident displacement within 18 months without intervention.",
    epi: { E:65, T:42, H:38, I:35, C:28, A:55, L:44 },
    verdict: "BLOCK",
    blockDim: "Cultural (28)",
    actions: ["Introduce tourist density caps by district", "Require cultural impact assessment for all new accommodation licences", "Redirect 15% of tourism tax to cultural heritage preservation fund"],
  },
  "Financial Services": {
    context: "Rural SME credit scoring algorithm",
    cnm: "Context layer reveals systematic geographic bias in training data. Nexus identifies feedback loop between urban-biased models and rural economic exclusion. Modelling shows 100% rural rejection rate despite strong credit histories.",
    epi: { E:65, T:44, H:60, I:28, C:38, A:50, L:32 },
    verdict: "BLOCK",
    blockDim: "Inclusive (28)",
    actions: ["Rebuild training dataset with minimum 40% rural SME data", "Introduce sector-specific sub-models for agriculture and cooperatives", "Mandate human review for all rural and agricultural applications"],
  },
  Healthcare: {
    context: "AI triage prioritisation in emergency departments",
    cnm: "Context layer identifies age and comorbidity variables as proxies for systemic bias. Nexus maps relationship between algorithmic deprioritisation and mortality outcomes in elderly populations. Modelling confirms discriminatory pattern.",
    epi: { E:70, T:38, H:22, I:30, C:55, A:45, L:60 },
    verdict: "BLOCK",
    blockDim: "Human (22)",
    actions: ["Remove age as a primary triage weighting variable", "Introduce mandatory human clinical override for all deprioritised patients", "Commission independent ethics audit before redeployment"],
  },
  "Urban Planning": {
    context: "Smart city data surveillance infrastructure",
    cnm: "Context layer maps citizen consent gaps and data governance voids. Nexus identifies asymmetric power relationships between municipal authority and resident communities. Modelling reveals 67% of monitored zones correspond to low-income districts.",
    epi: { E:62, T:55, H:48, I:40, C:58, A:52, L:55 },
    verdict: "REVIEW",
    blockDim: null,
    actions: ["Establish independent citizen data oversight board", "Introduce opt-out mechanisms with no service penalty", "Rebalance monitoring infrastructure across all income zones equally"],
  },
  Education: {
    context: "Predictive dropout algorithm in secondary schools",
    cnm: "Context layer reveals socioeconomic proxies embedded in behavioural variables. Nexus maps relationship between algorithmic labelling and teacher expectations. Modelling confirms self-fulfilling prophecy dynamic in flagged student cohorts.",
    epi: { E:68, T:55, H:52, I:44, C:60, A:58, L:62 },
    verdict: "REVIEW",
    blockDim: null,
    actions: ["Remove household income and postcode variables from prediction model", "Introduce mandatory counsellor review before any student is flagged", "Publish annual bias audit by demographic group"],
  },
  "Climate Change": {
    context: "AI-driven carbon emission reduction strategy",
    cnm: "Context layer maps the intersection of industrial output, community vulnerability, and policy frameworks across affected regions. Nexus identifies feedback loops between emission sources, regulatory bodies, local populations, and ecological systems. Modelling projects three intervention scenarios — carbon taxation, green technology incentives, and community-led conservation — filtered through the EPI to assess equitable and ecological impact.",
    epi: { E:88, T:82, H:70, I:65, C:72, A:68, L:75 },
    verdict: "PASS",
    blockDim: null,
    actions: ["Prioritise community-led conservation projects in most vulnerable regions", "Ensure carbon taxation revenue is redistributed to low-income communities first", "Embed indigenous and local ecological knowledge into AI modelling datasets"],
  },
  "Cultural Heritage": {
    context: "AI recommendation system for heritage site tourism management",
    cnm: "Context layer identifies tension between tourism revenue dependency and preservation integrity of living heritage sites. Nexus maps relationships between tourism operators, local communities, heritage authorities, and visitor behaviour patterns. Modelling reveals that uncapped visitor flows cause irreversible damage to 67% of assessed sites within 10 years.",
    epi: { E:74, T:62, H:68, I:60, C:88, A:72, L:80 },
    verdict: "PASS",
    blockDim: null,
    actions: ["Implement AI-governed daily visitor caps calibrated per site carrying capacity", "Redirect tourism revenue to local artisan and cultural education programmes", "Establish community veto rights over commercial use of cultural assets"],
  },
  "Quality Management": {
    context: "AI quality assurance system in pharmaceutical manufacturing",
    cnm: "Context layer identifies critical gaps between regulatory compliance metrics and actual patient safety outcomes. Nexus maps the relationship between production efficiency targets, quality control processes, workforce expertise, and end-user health impact. Modelling shows that pure efficiency optimisation reduces defect detection rates by 23%.",
    epi: { E:65, T:70, H:85, I:68, C:55, A:78, L:58 },
    verdict: "PASS",
    blockDim: null,
    actions: ["Rebalance AI optimisation targets to weight patient safety above throughput efficiency", "Integrate frontline workforce expertise into quality model training data", "Introduce mandatory human expert review for all AI-flagged anomalies before batch release"],
  },
};


// ── SECTOR BENCHMARKS (average EPI scores by sector) ─────────────────────────
const SECTOR_BENCHMARKS = {
  'Tourism':            { E:72, T:58, H:62, I:55, C:78, A:60, L:74 },
  'Financial Services': { E:58, T:62, H:65, I:48, C:45, A:68, L:50 },
  'Healthcare':         { E:68, T:65, H:78, I:62, C:58, A:72, L:64 },
  'Urban Planning':     { E:65, T:60, H:62, I:58, C:62, A:58, L:68 },
  'Education':          { E:60, T:70, H:72, I:65, C:65, A:62, L:66 },
  'Climate Change':     { E:85, T:75, H:68, I:62, C:70, A:65, L:72 },
  'Cultural Heritage':  { E:70, T:58, H:65, I:58, C:88, A:62, L:78 },
  'Quality Management': { E:62, T:68, H:80, I:65, C:52, A:75, L:58 },
};

// ── UTILITY ───────────────────────────────────────────────────────────────────
function epiComposite(s) { return Math.round(Object.values(s).reduce((a,b)=>a+b,0)/7); }
function epiVerdict(s) {
  const blocked = DIMS.find(d => s[d.id] <= 35);
  if (blocked) return { v:"BLOCK", color:"#DC2626", bg:"#fef2f2", dim:blocked };
  const avg = epiComposite(s);
  if (avg >= 70) return { v:"EXCELLENT", color:"#059669", bg:"#f0fdf4" };
  if (avg >= 50) return { v:"PASS", color:"#16A34A", bg:"#f0fdf4" };
  return { v:"REVIEW", color:"#D97706", bg:"#fffbeb" };
}

// ── RADAR CHART ───────────────────────────────────────────────────────────────
function Radar({ scores, size=160 }) {
  const cx=size/2, cy=size/2, r=size*0.36;
  const n=DIMS.length;
  const angle=i=>(Math.PI*2*i)/n-Math.PI/2;
  const pt=(i,rad)=>({ x:cx+rad*Math.cos(angle(i)), y:cy+rad*Math.sin(angle(i)) });
  const gridPts=lv=>DIMS.map((_,i)=>pt(i,(lv/100)*r)).map(p=>`${p.x},${p.y}`).join(" ");
  const scorePts=DIMS.map((d,i)=>pt(i,(scores[d.id]/100)*r));
  return (
    <svg width={size} height={size} style={{overflow:"visible"}}>
      {[20,40,60,80,100].map(lv=>(
        <polygon key={lv} points={gridPts(lv)} fill="none"
          stroke={lv===50?"#f9731680":"rgba(255,255,255,0.1)"} strokeWidth={lv===50?1.5:0.5}
          strokeDasharray={lv===50?"4 3":"none"}/>
      ))}
      {DIMS.map((_,i)=>{const o=pt(i,r);return <line key={i} x1={cx} y1={cy} x2={o.x} y2={o.y} stroke="rgba(255,255,255,0.08)" strokeWidth={0.5}/>;} )}
      <polygon points={scorePts.map(p=>`${p.x},${p.y}`).join(" ")} fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth={2}/>
      {scorePts.map((p,i)=>(
        <circle key={i} cx={p.x} cy={p.y} r={4} fill={DIMS[i].color} stroke="#0f2942" strokeWidth={1.5}/>
      ))}
      {DIMS.map((d,i)=>{
        const lp=pt(i,r+20);
        return <text key={i} x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="central"
          style={{fontSize:9,fontWeight:700,fill:d.color,fontFamily:"Georgia,serif"}}>{d.id}</text>;
      })}
    </svg>
  );
}

// ── MODULE 1: FRAMEWORK HUB ───────────────────────────────────────────────────
function FrameworkHub({ t, setModule }) {
  const h = t.hub;
  const pillars = [
    { key:"cnm", title:h.cnmTitle, full:h.cnmFull, desc:h.cnmDesc, color:"#1A5FA8", bg:"#e6f1fb", icon:"◈" },
    { key:"epi", title:h.epiTitle, full:h.epiFull, desc:h.epiDesc, color:"#10b981", bg:"#e1f5ee", icon:"⬡" },
    { key:"demand", title:h.demandTitle, full:h.demandFull, desc:h.demandDesc, color:"#6B3FA0", bg:"#f3eef9", icon:"⟳" },
  ];
  return (
    <div style={{padding:"0 0 40px"}}>
      {/* Hero */}
      <div style={{
        background:"linear-gradient(135deg, #071422 0%, #0f2942 50%, #064e3b 100%)",
        padding:"60px 32px 48px", textAlign:"center", position:"relative", overflow:"hidden"
      }}>
        <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,opacity:0.04,
          backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
          backgroundSize:"20px 20px"}}/>
        <div style={{position:"relative"}}>
          
          <div style={{marginBottom:20,display:'flex',justifyContent:'center'}}>
            <img src={LOGO} alt='Culture Tour Ltd' style={{height:130,width:'auto',objectFit:'contain',borderRadius:14,background:'white',padding:'10px 24px'}}/>
          </div>
          
          <h1 style={{fontSize:"clamp(28px,6vw,52px)",fontWeight:800,color:"white",margin:"0 0 8px",
            fontFamily:"'Palatino Linotype',Georgia,serif",lineHeight:1.1}}>
            {h.title}
          </h1>
          <div style={{fontSize:"clamp(18px,4vw,32px)",color:"#10b981",fontStyle:"italic",
            fontFamily:"'Palatino Linotype',Georgia,serif",marginBottom:28}}>
            {h.sub}
          </div>
          <div style={{maxWidth:640,margin:"0 auto 8px",padding:"20px 28px",
            background:"rgba(16,185,129,0.08)",borderRadius:14,
            border:"1px solid rgba(16,185,129,0.3)",borderLeft:"4px solid #10b981"}}>
            <p style={{fontSize:"clamp(15px,2.5vw,19px)",color:"white",margin:"0 0 10px",
              fontFamily:"'Palatino Linotype',Georgia,serif",fontStyle:"italic",lineHeight:1.7,fontWeight:600}}>
              {"“"}{h.quote}{"”"}
            </p>
            <div style={{fontSize:12,color:"#10b981",fontWeight:700,letterSpacing:3,textTransform:"uppercase"}}>
              — {t.author}
            </div>
          </div>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.7)",maxWidth:620,margin:"16px auto 32px",lineHeight:1.8}}>
            {h.intro}
          </p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>setModule(1)} style={{
              padding:"12px 28px",borderRadius:8,border:"none",cursor:"pointer",
              background:"#10b981",color:"#071422",fontWeight:800,fontSize:14,
              fontFamily:"'Palatino Linotype',Georgia,serif"
            }}>{h.learnMore}</button>
            <a href="http://www.culturetour.org" target="_blank" rel="noopener noreferrer" style={{
              padding:"12px 28px",borderRadius:8,border:"1px solid rgba(255,255,255,0.3)",cursor:"pointer",
              background:"transparent",color:"white",fontWeight:600,fontSize:14,textDecoration:"none",
              display:"flex",alignItems:"center"
            }}>www.culturetour.org ↗</a>
          </div>
          {/* Request an Assessment */}
          <div style={{marginTop:24,padding:"20px 28px",background:"rgba(16,185,129,0.06)",borderRadius:14,border:"1px solid rgba(16,185,129,0.2)",maxWidth:520,margin:"24px auto 0"}}>
            <div style={{fontSize:11,letterSpacing:3,color:"#10b981",fontWeight:700,textTransform:"uppercase",marginBottom:10}}>
              {h.requestAssessment}
            </div>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.6)",margin:"0 0 14px",lineHeight:1.6}}>
              Get a custom EPI & CNM assessment for your destination or project.
            </p>
            <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
              <a href="mailto:serge@culturetour.org?subject=Assessment Request — Authentic Intelligence"
                style={{
                  padding:"10px 22px",borderRadius:8,border:"none",cursor:"pointer",
                  background:"#10b981",color:"#071422",fontWeight:800,fontSize:13,
                  textDecoration:"none",display:"flex",alignItems:"center",gap:8,
                  fontFamily:"'Palatino Linotype',Georgia,serif"
                }}>✉ {h.requestEmail}</a>
              <a href="https://wa.me/33619605426?text=Hello%20Serge%2C%20I%20would%20like%20to%20request%20an%20Authentic%20Intelligence%20assessment."
                target="_blank" rel="noopener noreferrer"
                style={{
                  padding:"10px 22px",borderRadius:8,border:"1px solid #25D366",cursor:"pointer",
                  background:"transparent",color:"#25D366",fontWeight:800,fontSize:13,
                  textDecoration:"none",display:"flex",alignItems:"center",gap:8,
                  fontFamily:"'Palatino Linotype',Georgia,serif"
                }}>💬 {h.requestWhatsApp}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}


      {/* Three pillars */}
      <div style={{padding:"32px 24px 0"}}>
        <div style={{fontSize:11,letterSpacing:4,color:"#7cb3e8",fontWeight:700,marginBottom:20,
          textTransform:"uppercase",textAlign:"center"}}>{h.pillars}</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:16}}>
          {pillars.map(p=>(
            <div key={p.key} style={{
              background:"#0f2942",borderRadius:16,padding:24,
              border:`1px solid ${p.color}40`,transition:"all 0.2s",cursor:"default"
            }}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                <div style={{
                  width:48,height:48,borderRadius:12,background:p.bg,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:22,color:p.color,fontWeight:800
                }}>{p.icon}</div>
                <div>
                  <div style={{fontSize:22,fontWeight:800,color:p.color,fontFamily:"'Palatino Linotype',Georgia,serif"}}>{p.title}</div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.5)",marginTop:2}}>{p.full}</div>
                </div>
              </div>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.75)",lineHeight:1.7,margin:0}}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ETHICAL letters */}
      <div style={{padding:"32px 24px 0"}}>
        <div style={{fontSize:11,letterSpacing:4,color:"#7cb3e8",fontWeight:700,marginBottom:16,
          textTransform:"uppercase",textAlign:"center"}}>ETHICAL — the 7 EPI dimensions</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:8}}>
          {DIMS.map(d=>(
            <div key={d.id} style={{
              background:"#0f2942",borderRadius:10,padding:"14px 8px",textAlign:"center",
              border:`1px solid ${d.color}30`
            }}>
              <div style={{fontSize:24,fontWeight:800,color:d.color,fontFamily:"Georgia,serif"}}>{d.id}</div>
              <div style={{fontSize:16,marginTop:4}}>{d.icon}</div>
            </div>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:8,marginTop:4}}>
          {["Environmental","Transformative","Human","Inclusive","Cultural","Adaptive","Local"].map((w,i)=>(
            <div key={w} style={{textAlign:"center",fontSize:9,color:DIMS[i].color,fontWeight:600,letterSpacing:0.5,lineHeight:1.3}}>{w}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── MODULE 2: EPI CALCULATOR ──────────────────────────────────────────────────
function EPICalculator({ t }) {
  const [scores, setScores] = useState({E:65,T:58,H:72,I:60,C:75,A:55,L:68});
  const et = t.epi;
  const verdict = epiVerdict(scores);
  const composite = epiComposite(scores);
  return (
    <div style={{padding:"24px 24px 40px"}}>
      <div style={{marginBottom:24}}>
        <h2 style={{fontSize:24,fontWeight:800,color:"white",margin:"0 0 6px",fontFamily:"'Palatino Linotype',Georgia,serif"}}>{et.title}</h2>
        <p style={{fontSize:13,color:"rgba(255,255,255,0.6)",margin:0}}>{et.intro}</p>
      </div>
      <style>{`@media(max-width:700px){.epi-grid{grid-template-columns:1fr!important}}`}</style>
      <div className="epi-grid" style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:20,alignItems:"start"}}>
        {/* Sliders */}
        <div style={{background:"#0f2942",borderRadius:16,padding:22,border:"1px solid #1e3a5f"}}>
          <div style={{fontSize:10,letterSpacing:3,color:"#7cb3e8",fontWeight:700,marginBottom:16,textTransform:"uppercase"}}>
            {et.sub} · {et.thresholds}
          </div>
          {DIMS.map(d=>{
            const s=scores[d.id];
            const isBlock=s<=35;
            return (
              <div key={d.id} style={{marginBottom:18}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
                  <span style={{fontSize:13,fontWeight:700,color:isBlock?"#DC2626":d.color}}>
                    {d.icon} {et.dims[d.id].label}
                    <span style={{fontSize:10,color:"rgba(255,255,255,0.4)",fontWeight:400,marginLeft:8}}>{et.dims[d.id].desc}</span>
                  </span>
                  <span style={{fontSize:16,fontWeight:800,fontFamily:"Georgia,serif",
                    color:isBlock?"#DC2626":s<50?"#D97706":s>=70?"#10b981":d.color}}>{s}</span>
                </div>
                <input type="range" min={0} max={100} value={s}
                  onChange={e=>setScores(prev=>({...prev,[d.id]:+e.target.value}))}
                  style={{width:"100%",accentColor:isBlock?"#DC2626":d.color,height:5}}/>
                <div style={{height:5,borderRadius:3,background:"#1e3a5f",overflow:"hidden",marginTop:4,position:"relative"}}>
                  <div style={{width:`${s}%`,height:"100%",background:isBlock?"#DC2626":s<50?"#D97706":d.color,borderRadius:3,transition:"width 0.3s"}}/>
                  <div style={{position:"absolute",top:0,left:"35%",width:1.5,height:"100%",background:"#DC262640"}}/>
                  <div style={{position:"absolute",top:0,left:"50%",width:1.5,height:"100%",background:"#D9770640"}}/>
                </div>
              </div>
            );
          })}
          <button onClick={()=>setScores({E:50,T:50,H:50,I:50,C:50,A:50,L:50})}
            style={{marginTop:8,padding:"8px 20px",borderRadius:8,border:"1px solid #1e3a5f",
              background:"transparent",color:"#7cb3e8",cursor:"pointer",fontSize:12,
              fontFamily:"'Palatino Linotype',Georgia,serif"}}>↺ {et.reset}</button>
        </div>

        {/* Verdict panel */}
        <div style={{background:"#0f2942",borderRadius:16,padding:20,border:`2px solid ${verdict.color}`,
          boxShadow:`0 8px 32px ${verdict.color}20`}}>
          <div style={{textAlign:"center",marginBottom:16}}>
            <Radar scores={scores} size={160}/>
          </div>
          <div style={{textAlign:"center",padding:"14px",borderRadius:12,
            background:verdict.color+"20",border:`2px solid ${verdict.color}`,marginBottom:14}}>
            <div style={{fontSize:10,letterSpacing:3,color:verdict.color,fontWeight:700,textTransform:"uppercase"}}>{et.verdict}</div>
            <div style={{fontSize:32,fontWeight:800,color:verdict.color,fontFamily:"Georgia,serif"}}>{verdict.v}</div>
            {verdict.dim && <div style={{fontSize:11,color:verdict.color,marginTop:4}}>{et.blockBy}: {verdict.dim.label||verdict.dim.id}</div>}
          </div>
          <div style={{textAlign:"center",marginBottom:16}}>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.5)",letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>{et.composite}</div>
            <div style={{fontSize:44,fontWeight:800,color:verdict.color,fontFamily:"Georgia,serif",lineHeight:1}}>
              {composite}<span style={{fontSize:20,color:"rgba(255,255,255,0.3)"}}>/100</span>
            </div>
          </div>
          {DIMS.map(d=>{
            const s=scores[d.id];
            const c=s<=35?"#DC2626":s<50?"#D97706":d.color;
            return (
              <div key={d.id} style={{marginBottom:6}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                  <span style={{fontSize:11,color:d.color,fontWeight:600}}>{d.icon} {et.dims[d.id].label}</span>
                  <span style={{fontSize:12,fontWeight:800,color:c}}>{s}</span>
                </div>
                <div style={{height:5,borderRadius:3,background:"#1e3a5f",overflow:"hidden"}}>
                  <div style={{width:`${s}%`,height:"100%",background:c,borderRadius:3,transition:"width 0.5s"}}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── MODULE 3: BARCELONA DASHBOARD ────────────────────────────────────────────
function BarcelonaDashboard({ t }) {
  const [selected, setSelected] = useState(null);
  const bt = t.barcelona;
  const pressureColor = p => p>=80?"#DC2626":p>=55?"#D97706":"#16A34A";
  const statusLabel = s => bt[s];
  return (
    <div style={{padding:"24px 24px 40px"}}>
      <div style={{marginBottom:24}}>
        <h2 style={{fontSize:24,fontWeight:800,color:"white",margin:"0 0 6px",fontFamily:"'Palatino Linotype',Georgia,serif"}}>{bt.title}</h2>
        <p style={{fontSize:13,color:"rgba(255,255,255,0.6)",margin:0}}>{bt.intro}</p>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:12,marginBottom:20}}>
        {BARCELONA_DISTRICTS.map(d=>{
          const pc=pressureColor(d.pressure);
          const ev=epiVerdict({E:d.epi-5,T:d.epi-8,H:d.epi+5,I:d.epi-3,C:d.epi-10,A:d.epi,L:d.epi+3});
          const isSelected=selected?.name===d.name;
          return (
            <div key={d.name} onClick={()=>setSelected(isSelected?null:d)}
              style={{
                background:isSelected?"#132338":"#0f2942",borderRadius:12,padding:"14px 16px",
                cursor:"pointer",border:`1.5px solid ${isSelected?ev.color:"#1e3a5f"}`,
                transition:"all 0.2s",boxShadow:isSelected?`0 4px 20px ${ev.color}25`:"none"
              }}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                <div style={{fontSize:14,fontWeight:800,color:"white"}}>{d.name}</div>
                <span style={{fontSize:10,fontWeight:800,padding:"2px 8px",borderRadius:4,
                  background:pc+"20",color:pc,letterSpacing:1}}>{statusLabel(d.status)}</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                <div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.4)",marginBottom:3,letterSpacing:1,textTransform:"uppercase"}}>{bt.pressure}</div>
                  <div style={{height:6,borderRadius:3,background:"#1e3a5f",overflow:"hidden",marginBottom:3}}>
                    <div style={{width:`${d.pressure}%`,height:"100%",background:pc,borderRadius:3}}/>
                  </div>
                  <div style={{fontSize:13,fontWeight:800,color:pc,fontFamily:"Georgia,serif"}}>{d.pressure}%</div>
                </div>
                <div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.4)",marginBottom:3,letterSpacing:1,textTransform:"uppercase"}}>{bt.epiScore}</div>
                  <div style={{height:6,borderRadius:3,background:"#1e3a5f",overflow:"hidden",marginBottom:3}}>
                    <div style={{width:`${d.epi}%`,height:"100%",background:ev.color,borderRadius:3}}/>
                  </div>
                  <div style={{fontSize:13,fontWeight:800,color:ev.color,fontFamily:"Georgia,serif"}}>{d.epi}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selected ? (
        <div style={{background:"#0f2942",borderRadius:16,padding:22,border:`2px solid ${epiVerdict({E:selected.epi-5,T:selected.epi-8,H:selected.epi+5,I:selected.epi-3,C:selected.epi-10,A:selected.epi,L:selected.epi+3}).color}`}}>
          <div style={{fontSize:11,letterSpacing:3,color:"#7cb3e8",fontWeight:700,marginBottom:6,textTransform:"uppercase"}}>{bt.district}</div>
          <div style={{fontSize:22,fontWeight:800,color:"white",marginBottom:12,fontFamily:"'Palatino Linotype',Georgia,serif"}}>{selected.name}</div>
          <div style={{fontSize:11,letterSpacing:2,color:"#7cb3e8",fontWeight:700,marginBottom:8,textTransform:"uppercase"}}>{bt.recommendation}</div>
          <div style={{fontSize:14,color:"rgba(255,255,255,0.8)",lineHeight:1.8,padding:"14px 18px",
            background:"#071422",borderRadius:10,borderLeft:"3px solid #10b981"}}>
            {selected.recommendation}
          </div>
        </div>
      ) : (
        <div style={{textAlign:"center",padding:"24px",color:"rgba(255,255,255,0.3)",fontSize:13,
          background:"#0f2942",borderRadius:16,border:"1px dashed #1e3a5f"}}>
          {bt.selectDistrict}
        </div>
      )}
    </div>
  );
}

// ── MODULE 4: DEMAND VISUALISER ───────────────────────────────────────────────
function DEMANDVisualiser({ t }) {
  const [stage, setStage] = useState(0);
  const dt = t.demand;
  const stages = dt.stages;
  const colors = ["#1A5FA8","#10b981","#6B3FA0","#A0522D","#B5451B","#0F766E"];
  const icons = ["🗄️","⚖️","📊","👤","🔗","🔄"];
  const current = stages[stage];
  const color = colors[stage];
  return (
    <div style={{padding:"24px 24px 40px"}}>
      <div style={{marginBottom:24}}>
        <h2 style={{fontSize:24,fontWeight:800,color:"white",margin:"0 0 6px",fontFamily:"'Palatino Linotype',Georgia,serif"}}>{dt.title}</h2>
        <p style={{fontSize:13,color:"rgba(255,255,255,0.6)",margin:0}}>{dt.intro}</p>
      </div>

      {/* Stage pills */}
      <div style={{display:"flex",gap:6,marginBottom:24,flexWrap:"wrap"}}>
        {stages.map((s,i)=>(
          <div key={i} onClick={()=>setStage(i)}
            style={{
              padding:"8px 16px",borderRadius:8,cursor:"pointer",
              background:i===stage?colors[i]:"#0f2942",
              border:`1px solid ${i===stage?colors[i]:"#1e3a5f"}`,
              transition:"all 0.2s",display:"flex",alignItems:"center",gap:6
            }}>
            <span style={{fontSize:20,fontWeight:900,color:i===stage?"white":colors[i],
              fontFamily:"Georgia,serif"}}>{s.letter}</span>
            <span style={{fontSize:11,color:i===stage?"white":"rgba(255,255,255,0.5)",fontWeight:600}}>{s.word}</span>
          </div>
        ))}
      </div>

      {/* Current stage */}
      <div style={{background:"#0f2942",borderRadius:20,padding:32,border:`2px solid ${color}`,
        boxShadow:`0 12px 40px ${color}20`,marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:24}}>
          <div style={{
            width:80,height:80,borderRadius:20,
            background:`${color}20`,border:`2px solid ${color}`,
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:36
          }}>{icons[stage]}</div>
          <div>
            <div style={{fontSize:11,letterSpacing:4,color,fontWeight:700,textTransform:"uppercase",marginBottom:4}}>
              {dt.stage} {stage+1} {dt.of} {stages.length}
            </div>
            <div style={{fontSize:36,fontWeight:900,color,fontFamily:"Georgia,serif",lineHeight:1}}>
              {current.letter}
            </div>
            <div style={{fontSize:22,fontWeight:700,color:"white",fontFamily:"'Palatino Linotype',Georgia,serif"}}>
              {current.word}
            </div>
          </div>
        </div>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.85)",lineHeight:1.8,margin:0,
          padding:"16px 20px",background:"#071422",borderRadius:12,borderLeft:`4px solid ${color}`}}>
          {current.desc}
        </p>
      </div>

      {/* DEMAND pipeline visual */}
      <div style={{background:"#0f2942",borderRadius:16,padding:20,border:"1px solid #1e3a5f",marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:0,overflowX:"auto",paddingBottom:4}}>
          {stages.map((s,i)=>(
            <React.Fragment key={i}>
              <div onClick={()=>setStage(i)} style={{
                minWidth:72,padding:"12px 8px",textAlign:"center",borderRadius:8,cursor:"pointer",
                background:i===stage?`${colors[i]}30`:"transparent",
                border:`1px solid ${i===stage?colors[i]:"transparent"}`,
                transition:"all 0.2s"
              }}>
                <div style={{fontSize:24,fontWeight:900,color:colors[i],fontFamily:"Georgia,serif"}}>{s.letter}</div>
                <div style={{fontSize:9,color:i===stage?"white":"rgba(255,255,255,0.4)",marginTop:2,fontWeight:600}}>{s.word}</div>
              </div>
              {i<stages.length-1 && (
                <div style={{color:"rgba(255,255,255,0.2)",fontSize:18,padding:"0 2px",flexShrink:0}}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div style={{display:"flex",gap:12,justifyContent:"center"}}>
        <button onClick={()=>setStage(Math.max(0,stage-1))} disabled={stage===0}
          style={{padding:"10px 24px",borderRadius:8,border:"1px solid #1e3a5f",
            background:"transparent",color:stage===0?"rgba(255,255,255,0.2)":"white",
            cursor:stage===0?"not-allowed":"pointer",fontSize:13,
            fontFamily:"'Palatino Linotype',Georgia,serif"}}>
          {dt.prev}
        </button>
        {stage===stages.length-1 ? (
          <button onClick={()=>setStage(0)} style={{padding:"10px 24px",borderRadius:8,border:"none",
            background:"#10b981",color:"#071422",cursor:"pointer",fontSize:13,fontWeight:700,
            fontFamily:"'Palatino Linotype',Georgia,serif"}}>{dt.restart}</button>
        ) : (
          <button onClick={()=>setStage(Math.min(stages.length-1,stage+1))}
            style={{padding:"10px 24px",borderRadius:8,border:"none",
              background:color,color:"white",cursor:"pointer",fontSize:13,fontWeight:700,
              fontFamily:"'Palatino Linotype',Georgia,serif"}}>{dt.next}</button>
        )}
      </div>
    </div>
  );
}

// ── MODULE 5: INTELLIGENCE BRIEF GENERATOR ───────────────────────────────────
function BriefGenerator({ t }) {
  const [sector, setSector] = React.useState('');
  const [brief, setBrief] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('brief');
  const bt = t.brief;

  const generate = () => {
    if (!sector) return;
    setLoading(true);
    setBrief(null);
    setTimeout(() => {
      setBrief(BRIEF_TEMPLATES[sector] || BRIEF_TEMPLATES['Tourism']);
      setLoading(false);
      setActiveTab('brief');
    }, 1200);
  };

  const bv = brief ? epiVerdict(brief.epi) : null;
  const benchmark = sector ? SECTOR_BENCHMARKS[sector] : null;

  // SVG Radar Chart for dashboard
  const DashRadar = ({ scores, size=200, showBenchmark=false, benchScores=null }) => {
    const cx=size/2, cy=size/2, r=size*0.36;
    const n=DIMS.length;
    const angle=i=>(Math.PI*2*i)/n-Math.PI/2;
    const pt=(i,rad)=>({ x:cx+rad*Math.cos(angle(i)), y:cy+rad*Math.sin(angle(i)) });
    const gridPts=lv=>DIMS.map((_,ii)=>pt(ii,(lv/100)*r)).map(p=>p.x+','+p.y).join(' ');
    const scorePts=DIMS.map((d,ii)=>pt(ii,(scores[d.id]/100)*r));
    const benchPts=benchScores ? DIMS.map((d,ii)=>pt(ii,(benchScores[d.id]/100)*r)) : [];
    return (
      React.createElement('svg', {width:size, height:size, style:{overflow:'visible'}},
        [20,40,60,80,100].map(lv=>
          React.createElement('polygon', {key:lv, points:gridPts(lv), fill:'none',
            stroke:lv===50?'#f9731660':lv===35?'#DC262640':'rgba(255,255,255,0.08)',
            strokeWidth:lv===50||lv===35?1.5:0.5, strokeDasharray:lv===50||lv===35?'4 3':'none'})
        ),
        DIMS.map((_,ii)=>{ const o=pt(ii,r); return React.createElement('line',{key:ii,x1:cx,y1:cy,x2:o.x,y2:o.y,stroke:'rgba(255,255,255,0.08)',strokeWidth:0.5}); }),
        showBenchmark && benchPts.length > 0 && React.createElement('polygon', {
          points:benchPts.map(p=>p.x+','+p.y).join(' '),
          fill:'rgba(249,115,22,0.1)', stroke:'#f97316', strokeWidth:1.5, strokeDasharray:'4 3'
        }),
        React.createElement('polygon', {
          points:scorePts.map(p=>p.x+','+p.y).join(' '),
          fill:'rgba(16,185,129,0.15)', stroke:'#10b981', strokeWidth:2
        }),
        scorePts.map((p,ii)=>React.createElement('circle',{key:ii,cx:p.x,cy:p.y,r:5,fill:DIMS[ii].color,stroke:'#0f2942',strokeWidth:1.5})),
        DIMS.map((d,ii)=>{
          const lp=pt(ii,r+22);
          return React.createElement('text',{key:ii,x:lp.x,y:lp.y,textAnchor:'middle',dominantBaseline:'central',
            style:{fontSize:9,fontWeight:700,fill:d.color,fontFamily:'Georgia,serif'}},d.id);
        })
      )
    );
  };

  // Bar chart component
  const BarChart = ({ scores, benchScores }) => (
    React.createElement('div', {style:{padding:'0 4px'}},
      DIMS.map((d,ii) => {
        const s = scores[d.id];
        const b = benchScores ? benchScores[d.id] : null;
        const c = s<=35?'#DC2626':s<50?'#D97706':d.color;
        return React.createElement('div', {key:d.id, style:{marginBottom:10}},
          React.createElement('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:3}},
            React.createElement('span', {style:{fontSize:11,fontWeight:700,color:d.color}}, d.icon+' '+d.id),
            React.createElement('div', {style:{display:'flex',gap:8,alignItems:'center'}},
              b && React.createElement('span', {style:{fontSize:10,color:'#f97316'}}, 'Avg: '+b),
              React.createElement('span', {style:{fontSize:13,fontWeight:800,color:c,fontFamily:'Georgia,serif'}}, s)
            )
          ),
          React.createElement('div', {style:{height:10,borderRadius:5,background:'#1e3a5f',overflow:'hidden',position:'relative'}},
            b && React.createElement('div', {style:{position:'absolute',top:0,left:b+'%',width:2,height:'100%',background:'#f97316',zIndex:2}}),
            React.createElement('div', {style:{height:'100%',width:s+'%',background:c,borderRadius:5,transition:'width 0.8s cubic-bezier(0.34,1.56,0.64,1)'}})
          )
        );
      })
    )
  );

  return (
    React.createElement('div', {style:{padding:'24px 24px 40px'}},
      React.createElement('div', {style:{marginBottom:24}},
        React.createElement('h2', {style:{fontSize:24,fontWeight:800,color:'white',margin:'0 0 6px',fontFamily:"'Palatino Linotype',Georgia,serif"}}, bt.title),
        React.createElement('p', {style:{fontSize:13,color:'rgba(255,255,255,0.6)',margin:0}}, bt.intro)
      ),

      // Sector selector
      React.createElement('div', {style:{background:'#0f2942',borderRadius:16,padding:22,border:'1px solid #1e3a5f',marginBottom:20}},
        React.createElement('div', {style:{fontSize:10,letterSpacing:3,color:'#7cb3e8',fontWeight:700,marginBottom:14,textTransform:'uppercase'}}, bt.sector),
        React.createElement('div', {style:{display:'flex',gap:10,flexWrap:'wrap',marginBottom:20}},
          bt.sectors.map((s,i) => {
            const englishKey = ['Tourism','Financial Services','Healthcare','Urban Planning','Education','Climate Change','Cultural Heritage','Quality Management'][i];
            return React.createElement('button', {
              key:s, onClick:()=>setSector(englishKey),
              style:{
                padding:'10px 18px',borderRadius:8,cursor:'pointer',
                fontFamily:"'Palatino Linotype',Georgia,serif",fontSize:13,fontWeight:600,
                border:'1.5px solid '+(sector===englishKey?'#10b981':'#1e3a5f'),
                background:sector===englishKey?'#10b98120':'transparent',
                color:sector===englishKey?'#10b981':'rgba(255,255,255,0.7)',
                transition:'all 0.2s'
              }
            }, s);
          })
        ),
        // Generate + Dashboard buttons
        React.createElement('div', {style:{display:'flex',gap:12,flexWrap:'wrap'}},
          React.createElement('button', {
            onClick:generate, disabled:!sector||loading,
            style:{
              padding:'12px 28px',borderRadius:8,border:'none',
              cursor:sector?'pointer':'not-allowed',
              background:sector?'#10b981':'#1e3a5f',
              color:sector?'#071422':'rgba(255,255,255,0.3)',
              fontWeight:800,fontSize:14,
              fontFamily:"'Palatino Linotype',Georgia,serif",
              opacity:loading?0.7:1,transition:'all 0.2s',
              display:'flex',alignItems:'center',gap:8
            }
          }, '📄 '+(loading?bt.generating:bt.generate)),
          brief && React.createElement('button', {
            onClick:()=>setActiveTab(activeTab==='dashboard'?'brief':'dashboard'),
            style:{
              padding:'12px 28px',borderRadius:8,border:'1.5px solid #1A5FA8',
              cursor:'pointer',background:activeTab==='dashboard'?'#1A5FA8':'transparent',
              color:activeTab==='dashboard'?'white':'#7cb3e8',
              fontWeight:800,fontSize:14,
              fontFamily:"'Palatino Linotype',Georgia,serif",
              display:'flex',alignItems:'center',gap:8
            }
          }, '📊 '+(t.brief.dashboard||'Dashboard'))
        )
      ),

      // Brief output
      brief && bv && activeTab==='brief' &&
      React.createElement('div', {style:{background:'#0f2942',borderRadius:16,border:'2px solid '+bv.color,overflow:'hidden'}},
        React.createElement('div', {style:{background:'#071422',padding:'20px 24px',borderBottom:'1px solid #1e3a5f'}},
          React.createElement('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:10}},
            React.createElement('div', null,
              React.createElement('div', {style:{fontSize:10,letterSpacing:4,color:'#10b981',fontWeight:700,marginBottom:6,textTransform:'uppercase'}}, bt.briefTitle),
              React.createElement('div', {style:{fontSize:20,fontWeight:800,color:'white',fontFamily:"'Palatino Linotype',Georgia,serif"}}, brief.context),
              React.createElement('div', {style:{fontSize:11,color:'rgba(255,255,255,0.4)',marginTop:4}}, bt.poweredBy)
            ),
            React.createElement('div', {style:{textAlign:'center'}},
              React.createElement('div', {style:{fontSize:10,color:bv.color,letterSpacing:2,fontWeight:700,textTransform:'uppercase',marginBottom:4}}, 'EPI Verdict'),
              React.createElement('div', {style:{fontSize:28,fontWeight:800,color:bv.color,fontFamily:'Georgia,serif'}}, brief.verdict),
              brief.blockDim && React.createElement('div', {style:{fontSize:11,color:bv.color,marginTop:2}}, '↑ '+brief.blockDim)
            )
          )
        ),
        React.createElement('div', {style:{padding:'20px 24px'}},
          React.createElement('div', {style:{marginBottom:20}},
            React.createElement('div', {style:{fontSize:10,letterSpacing:3,color:'#1A5FA8',fontWeight:700,marginBottom:10,textTransform:'uppercase'}}, 'CNM Analysis'),
            React.createElement('p', {style:{fontSize:13,color:'rgba(255,255,255,0.8)',lineHeight:1.8,margin:0,padding:'14px 18px',background:'#071422',borderRadius:10,borderLeft:'3px solid #1A5FA8'}}, brief.cnm)
          ),
          React.createElement('div', {style:{marginBottom:20}},
            React.createElement('div', {style:{fontSize:10,letterSpacing:3,color:'#10b981',fontWeight:700,marginBottom:10,textTransform:'uppercase'}}, 'EPI Dimension Scores'),
            React.createElement('div', {style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(110px,1fr))',gap:8}},
              DIMS.map(d=>{
                const s=brief.epi[d.id];
                const c=s<=35?'#DC2626':s<50?'#D97706':d.color;
                return React.createElement('div', {key:d.id,style:{background:'#071422',borderRadius:8,padding:'10px 12px',textAlign:'center',border:'1px solid '+(s<=35?'#DC262640':'#1e3a5f')}},
                  React.createElement('div', {style:{fontSize:10,color:d.color,marginBottom:3}}, d.icon),
                  React.createElement('div', {style:{fontSize:20,fontWeight:800,color:c,fontFamily:'Georgia,serif'}}, s),
                  React.createElement('div', {style:{fontSize:9,color:d.color,marginTop:2,fontWeight:600}}, d.id),
                  s<=35 && React.createElement('div', {style:{fontSize:9,color:'#DC2626',marginTop:2,fontWeight:700}}, 'BLOCK')
                );
              })
            )
          ),
          React.createElement('div', null,
            React.createElement('div', {style:{fontSize:10,letterSpacing:3,color:'#6B3FA0',fontWeight:700,marginBottom:10,textTransform:'uppercase'}}, 'Recommended Actions'),
            brief.actions.map((a,i)=>
              React.createElement('div', {key:i,style:{display:'flex',gap:12,marginBottom:8,padding:'10px 14px',background:'#071422',borderRadius:8,alignItems:'flex-start'}},
                React.createElement('span', {style:{color:'#10b981',fontWeight:800,fontSize:14,minWidth:20}}, '→'),
                React.createElement('span', {style:{fontSize:13,color:'rgba(255,255,255,0.8)',lineHeight:1.6}}, a)
              )
            )
          )
        ),
        React.createElement('div', {style:{background:'#071422',padding:'12px 24px',borderTop:'1px solid #1e3a5f',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}},
          React.createElement('span', {style:{fontSize:11,color:'rgba(255,255,255,0.3)'}}, '© 2026 Serge MAKOUNDOU / Culture Tour Ltd'),
          React.createElement('span', {style:{fontSize:11,color:'rgba(255,255,255,0.3)'}}, 'www.culturetour.org')
        )
      ),

      // Dashboard output
      brief && bv && activeTab==='dashboard' &&
      React.createElement('div', {style:{background:'#0f2942',borderRadius:16,border:'1px solid #1A5FA8',overflow:'hidden'}},
        // Dashboard header
        React.createElement('div', {style:{background:'#071422',padding:'16px 24px',borderBottom:'1px solid #1e3a5f',display:'flex',justifyContent:'space-between',alignItems:'center'}},
          React.createElement('div', null,
            React.createElement('div', {style:{fontSize:10,letterSpacing:4,color:'#1A5FA8',fontWeight:700,textTransform:'uppercase',marginBottom:4}}, bt.dashboardTitle||'EPI Dashboard'),
            React.createElement('div', {style:{fontSize:16,fontWeight:800,color:'white',fontFamily:"'Palatino Linotype',Georgia,serif"}}, brief.context)
          ),
          React.createElement('div', {style:{textAlign:'center',padding:'8px 20px',borderRadius:10,background:bv.color+'20',border:'1.5px solid '+bv.color}},
            React.createElement('div', {style:{fontSize:10,color:bv.color,letterSpacing:2,fontWeight:700,textTransform:'uppercase'}},'EPI'),
            React.createElement('div', {style:{fontSize:28,fontWeight:800,color:bv.color,fontFamily:'Georgia,serif'}}, epiComposite(brief.epi)),
            React.createElement('div', {style:{fontSize:11,fontWeight:800,color:bv.color}}, brief.verdict)
          )
        ),

        React.createElement('div', {style:{padding:'20px 24px'}},
          // Top row: radar + bar
          React.createElement('div', {style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20,marginBottom:20}},
            // Radar
            React.createElement('div', {style:{background:'#071422',borderRadius:12,padding:16,border:'1px solid #1e3a5f'}},
              React.createElement('div', {style:{fontSize:10,letterSpacing:3,color:'#7cb3e8',fontWeight:700,marginBottom:12,textTransform:'uppercase'}}, '📡 '+(bt.radarTitle||'Radar')),
              React.createElement('div', {style:{display:'flex',flexDirection:'column',alignItems:'center'}},
                React.createElement(DashRadar, {scores:brief.epi, size:180, showBenchmark:true, benchScores:benchmark}),
                React.createElement('div', {style:{display:'flex',gap:16,marginTop:8,fontSize:10}},
                  React.createElement('span', {style:{color:'#10b981'}}, '● This decision'),
                  benchmark && React.createElement('span', {style:{color:'#f97316'}}, '○ Sector avg')
                )
              )
            ),
            // Bar chart
            React.createElement('div', {style:{background:'#071422',borderRadius:12,padding:16,border:'1px solid #1e3a5f'}},
              React.createElement('div', {style:{fontSize:10,letterSpacing:3,color:'#7cb3e8',fontWeight:700,marginBottom:12,textTransform:'uppercase'}}, '📊 '+(bt.barTitle||'Scores')),
              React.createElement(BarChart, {scores:brief.epi, benchScores:benchmark})
            )
          ),

          // Benchmark row
          benchmark &&
          React.createElement('div', {style:{background:'#071422',borderRadius:12,padding:16,border:'1px solid #1e3a5f'}},
            React.createElement('div', {style:{fontSize:10,letterSpacing:3,color:'#7cb3e8',fontWeight:700,marginBottom:14,textTransform:'uppercase'}}, '🎯 '+(bt.benchmarkTitle||'Sector Benchmark')+' — '+sector),
            React.createElement('div', {style:{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:8}},
              DIMS.map(d=>{
                const actual = brief.epi[d.id];
                const avg = benchmark[d.id];
                const diff = actual - avg;
                const diffColor = diff >= 0 ? '#10b981' : '#DC2626';
                return React.createElement('div', {key:d.id,style:{textAlign:'center',padding:'10px 6px',borderRadius:8,background:'#0f2942',border:'1px solid #1e3a5f30'}},
                  React.createElement('div', {style:{fontSize:14,marginBottom:4}}, d.icon),
                  React.createElement('div', {style:{fontSize:9,color:d.color,fontWeight:700,marginBottom:6}}, d.id),
                  React.createElement('div', {style:{fontSize:16,fontWeight:800,color: actual<=35?'#DC2626':actual<50?'#D97706':d.color,fontFamily:'Georgia,serif'}}, actual),
                  React.createElement('div', {style:{fontSize:9,color:'#7cb3e8',margin:'2px 0'}}, 'avg: '+avg),
                  React.createElement('div', {style:{fontSize:10,fontWeight:800,color:diffColor}}, (diff>=0?'+':'')+diff)
                );
              })
            ),
            React.createElement('div', {style:{marginTop:12,padding:'10px 14px',background:'#0f2942',borderRadius:8,fontSize:12,color:'rgba(255,255,255,0.6)',lineHeight:1.6}},
              '💡 ',
              React.createElement('strong', {style:{color:'white'}}, 'Reading: '),
              'Green ∆ = above sector average · Red ∇ = below sector average · Orange dashed line on radar = sector benchmark'
            )
          )
        )
      )
    )
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function AuthenticIntelligenceApp() {
  const [module, setModule] = useState(0);
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = T[lang];

  const modules = [
    { component: <FrameworkHub t={t} setModule={setModule}/> },
    { component: <EPICalculator t={t}/> },
    { component: <BarcelonaDashboard t={t}/> },
    { component: <DEMANDVisualiser t={t}/> },
    { component: <BriefGenerator t={t}/> },
  ];

  return (
    <div style={{
      fontFamily:"'Palatino Linotype',Georgia,serif",
      background:"#071422",minHeight:"100vh",color:"white",
      maxWidth:"100%",overflow:"hidden"
    }}>
      {/* Top nav */}
      <nav style={{
        background:"#0a1f35",borderBottom:"1px solid #1e3a5f",
        padding:"0 20px",position:"sticky",top:0,zIndex:100
      }}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",height:56}}>
          {/* Logo */}
          <div style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>setModule(0)}>
            <img src={LOGO} alt="Culture Tour" style={{height:48,width:"auto",objectFit:"contain",borderRadius:8,background:"white",padding:"3px 10px"}}/>
            <div style={{display:"none",flexDirection:"column"}}>
              <span style={{fontSize:12,fontWeight:800,color:"white",lineHeight:1}}>The Authentic Intelligence: Beyond Algorithms</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div style={{display:"flex",gap:2}}>
            {t.nav.map((n,i)=>(
              <button key={i} onClick={()=>setModule(i)}
                style={{
                  padding:"8px 14px",borderRadius:6,border:"none",cursor:"pointer",
                  background:module===i?"#10b98120":"transparent",
                  color:module===i?"#10b981":"rgba(255,255,255,0.6)",
                  fontSize:12,fontWeight:module===i?700:400,
                  fontFamily:"'Palatino Linotype',Georgia,serif",
                  borderBottom:module===i?"2px solid #10b981":"2px solid transparent",
                  transition:"all 0.2s"
                }}>
                <span style={{display:"none"}}>{n}</span>
                <span>{t.navShort[i]}</span>
              </button>
            ))}
          </div>

          {/* Lang toggle + branding */}
          <div className="lang-toggle-top" style={{display:"flex",alignItems:"center",gap:8}}>
            <style>{`.lang-toggle-top{display:flex!important} @media(max-width:500px){.lang-toggle-top{display:none!important}}`}</style>
            <button onClick={()=>setLang(l=>l==="en"?"fr":"en")}
              style={{
                padding:"5px 12px",borderRadius:6,border:"1px solid #1e3a5f",
                background:"transparent",color:"#7cb3e8",cursor:"pointer",
                fontSize:11,fontWeight:700,fontFamily:"'Palatino Linotype',Georgia,serif",
                letterSpacing:1
              }}>{lang==="en"?"FR":"EN"}</button>
          </div>
        </div>

        {/* Module title bar */}
        <div style={{paddingBottom:8,borderTop:"1px solid #1e3a5f10"}}>
          <div style={{fontSize:10,color:"#7cb3e8",letterSpacing:2,textTransform:"uppercase"}}>
            {t.nav[module]}
          </div>
        </div>
      </nav>

      {/* Module content */}
      <div key={module} style={{animation:"fadeIn 0.3s ease"}}>
        {modules[module].component}
      </div>

      {/* Bottom nav (mobile-style) */}
      <div style={{
        position:"fixed",bottom:0,left:0,right:0,
        background:"#0a1f35",borderTop:"1px solid #1e3a5f",
        display:"flex",zIndex:100
      }}>
        {t.navShort.map((n,i)=>(
          <button key={i} onClick={()=>setModule(i)}
            style={{
              flex:1,padding:"10px 4px",border:"none",cursor:"pointer",
              background:"transparent",
              color:module===i?"#10b981":"rgba(255,255,255,0.4)",
              fontSize:9,fontWeight:module===i?700:400,
              fontFamily:"'Palatino Linotype',Georgia,serif",
              borderTop:module===i?"2px solid #10b981":"2px solid transparent",
              transition:"all 0.2s",display:"flex",flexDirection:"column",alignItems:"center",gap:3
            }}>
            <span style={{fontSize:16}}>
              {["◈","⬡","🗺","⟳","📄"][i]}
            </span>
            {n}
          </button>
        ))}
        {/* Lang toggle in bottom nav — visible on mobile only */}
        <button className="lang-toggle-bottom" onClick={()=>setLang(l=>l==="en"?"fr":"en")}
          style={{
            flex:1,padding:"10px 4px",border:"none",cursor:"pointer",
            background:"transparent",color:"#7cb3e8",
            fontSize:9,fontWeight:700,
            fontFamily:"'Palatino Linotype',Georgia,serif",
            borderTop:"2px solid transparent",
            transition:"all 0.2s",display:"none",flexDirection:"column",alignItems:"center",gap:3
          }}>
          <style>{`@media(max-width:500px){.lang-toggle-bottom{display:flex!important}}`}</style>
          <span style={{fontSize:16}}>🌐</span>
          {lang==="en"?"FR":"EN"}
        </button>
      </div>

      {/* Footer */}
      <div style={{paddingBottom:80,background:"#071422"}}>
        <div style={{padding:"24px 24px 8px",borderTop:"1px solid #1e3a5f",
          display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <div style={{fontSize:11,color:"rgba(255,255,255,0.3)",lineHeight:1.6}}>
            <div>© {new Date().getFullYear()} Serge MAKOUNDOU / Culture Tour Ltd (No. 10908418)</div>
            <div>{t.footer.framework} · {t.footer.rights}</div>
          </div>
          <div style={{fontSize:11,color:"rgba(255,255,255,0.3)",textAlign:"right",lineHeight:1.6}}>
            <div>{t.footer.contact}</div>
            <div>{t.footer.website}</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}

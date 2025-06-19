// This file stores the summarized NHS clinical documents that form the AI's knowledge base.

export const NHS_KNOWLEDGE_BASE_TEXT = `
**Authoritative Reference Documents Summary:**

1.  **Document Title: Initial Assessment of Emergency Department Patients (The Royal College of Emergency Medicine, Published: February 2017)**
    *   **Core Focus:** Defining and describing processes for initial assessment of ED patients, offering general principles, and standardizing terminology. Replaces and builds on the 2011 Triage Position Statement.
    *   **Objectives of Initial Assessment:**
        1.  Improving safety.
        2.  Identifying acuity to ensure time-critical patients are treated appropriately and prioritisation occurs for others.
        3.  Improving efficiency to prevent unnecessary waits for investigations/diagnostics.
    *   **Key Principles:**
        *   ED front door managed by ED (quality improvement & governance).
        *   Joint development and shared governance if other services work within initial assessment systems.
        *   Navigation/streaming processes must prioritize patient safety.
        *   Initial assessment should improve overall care quality.
        *   Acknowledge if patients are advised to attend ED by other NHS services.
        *   Linkage with pre-hospital assessment and triage is ideal (be wary of diagnostic anchoring).
    *   **Key Recommendations & Definitions:**
        *   **Registration:** Within 5 minutes of arrival. Manage queues to avoid occult waits.
        *   **Gatekeeping by non-ED services:** Not supported for self-referrals, NHS111/primary care referrals, or ambulance arrivals (potentially unsafe, treatment delays).
        *   **Navigation:** Directing patients to appropriate services *prior* to formal clinical assessment. Should not involve redirection to off-site services. Best done by a clinician (e.g., experienced nurse). Non-clinician navigation needs clear written criteria, joint governance, regular review. RCEM recommends clinician-led navigation.
        *   **Streaming:** Allocating patients to different physical areas/services/pathways. Main objective: direct patient to correct location/service/person. Always by a trained clinician. May include to co-located/specialist services or (redirected) to off-site services (with safeguards). Needs to be brief.
            *   **Simple Streaming:** Clinical assessment alone (brief history, basic obs). May combine with triage, EWS calculation, basic first aid, simple analgesia/tests (CBG, urine HCG). Not for complex investigations. Directs to physical area (majors/minors) or co-located/specialist services.
            *   **Complex Streaming:** More detailed assessment of priority/acuity, ensuring management by correct service in correct timeframe. Includes initiation of investigations (blood/radiology).
            *   **Streaming Standard:** As soon as possible, ideally within 15 minutes of arrival. Capacity planned for variation, not average demand.
        *   **Rapid Assessment Systems:**
            *   **See and Treat:** For minor illness/injury, seen directly by a single clinician who completes care. Patients can be navigated or streamed. Standard: seen within 1 hour; if longer, assess via triage/streaming.
            *   **Senior Doctor Triage (SDT) / Rapid Assessment and Treatment (RAT) / Early Senior Assessment (ESA):** Senior clinician sees patient ASAP after arrival for early decisions on care/disposition. Typically a team effort. Takes longer than streaming/triage (20-30 mins). Most advanced complex streaming. Can replace other initial assessment if wait times are not excessive. Resource-intensive.
        *   **Triage:** Prioritises patients when demand exceeds capacity for full assessment in appropriate timeframe. Sorts patients by presenting complaint and physiological parameters. By trained clinical team member. Ideally within 15 minutes of arrival. Resource for variation. Environment with privacy but not isolated. Manchester Triage System common in UK/Ireland.
            *   **Triage Standard:** Face-to-face encounter within 15 minutes of arrival/registration, normally <5 mins contact.
        *   **Early Warning Scores (EWS):** NEWS (Adult) & PEWS (Paediatric) recommended for patients with concern of abnormal physiology. Provides baseline, identifies unwell patients, aids communication. Not for use in isolation for streaming/assessment/triage. Not for obstetric patients (use modified OEWS). EWS misleading if not repeated.
            *   **EWS Standard (if implemented):** Observations and EWS calculated ideally within 15 minutes of arrival for relevant patients. Repeat per local guidelines.
    *   **Scope:** Does not cover major incident initial assessment.
    *   **Relevance:** Comprehensive guidance on principles, definitions, and standards for initial patient assessment, navigation, streaming, and triage in EDs.

2.  **Document Title: Clinical Standards for Emergency Departments (The College of Emergency Medicine, Published: Aug 2010)**
    *   **Core Focus:** Defining a comprehensive set of clinical quality standards for ED operations, covering various conditions and procedures. Standards are reviewed annually.
    *   **Key Principles:** Patient safety, dignity, privacy.
    *   **Condition-Specific Standards Highlights:**
        *   **Advanced Life Support (ALS):** Senior doctor for cardiac arrest within 10 mins. Specific documentation.
        *   **Asthma (Adults/Children):**
            *   **Life-threatening:** Oxygen on arrival. Nebulised Salbutamol/Terbutaline + Ipratropium within 5 mins. IV/Oral steroids within 30 mins. Vital signs on arrival & repeated within 15 mins.
            *   **Moderate/Severe:** Oxygen on arrival. Nebulised Salbutamol/Terbutaline within 10 mins. IV/Oral steroids within 30 mins. Peak flow, vitals on arrival & repeated within 1 hour. Discharge medication plans.
        *   **Dislocated Shoulder & Pain (Pain Score 7-10 severe, 4-6 moderate):**
            *   Analgesia: Severe pain - 50% within 20min, 75% within 30min, 98% within 60min. Moderate pain - 75% within 30min, 90% within 60min.
            *   Re-evaluation within 60 mins of first analgesic dose.
            *   Dislocated Shoulder X-ray: 75% within 60min. Reduction: 75% 1st attempt <2hrs, 90% <3hrs.
        *   **Feverish Children (<5yrs, NICE CG47 based):** Routine full obs. 'Safety net' advice for discharged with amber features/no diagnosis. Amber features + no infection source: 90% no antibiotics. Red features + no infection source: FBC, CRP, blood culture, urinalysis.
        *   **Fractured Neck of Femur:** Pain relief as per dislocated shoulder. X-ray 75% within 60min. Admission 98% within 4hrs.
        *   **Head Injury (Adults):** High-risk assessment within 15 mins. Written advice for 90% discharged. CT imaging 90% within 1hr of request. CT report 90% within 1hr of scan. GCS <13: C-spine CT. Neurosurgical referral protocols. Obs frequency: GCS <15 half-hourly until GCS 15, then decreasing frequency.
        *   **Major Trauma:** Senior doctor (ATLS/APLS) within 10 mins. Specific documentation.
        *   **Myocardial Infarction:** Call to Needle 60 mins. Door to ECG 10 mins (90%). Door to Needle 30 mins (75%). Aspirin 90% (if not contraindicated).
        *   **Paracetamol Overdose:** Plasma levels not <4hrs post-ingestion. Treatment protocols based on time since ingestion and amount.
        *   **Pneumothorax (Adults):** Definitions for primary/secondary, small/large.
            *   Primary (minimal sx, small): No simple aspiration.
            *   Primary (minimal sx, large): 100% simple aspiration, repeat CXR pre-discharge.
            *   Primary (symptomatic): 100% simple aspiration; intercostal drain if fails.
            *   Secondary: Generally hospitalized. Drain for symptomatic or large.
        *   **Recording Adult Vital Signs (Majors/Resus):** Full vitals (RR, O2, HR, BP, GCS/AVPU, Temp) within 20 mins of arrival/triage. Repeat abnormal vitals within 60 mins. (Abnormal: RR <10/>20, O2<92%, HR<60/>100, SBP<100/>180, GCS<15/Not Alert, Temp<35/>38).
        *   **Renal Colic:** Pain management as above. Dipstick urinalysis. Consider CTKUB. FBC, renal function. Exclude AAA in >60s.
        *   **Safeguarding Children:** Access to senior Paed/EM opinion 24/7. IT for previous attendances. Notification protocols for frequent attenders or patients <16yrs to GP/safeguarding board. NAI consideration.
        *   **Severe Sepsis/Septic Shock (Adults):** Vitals on arrival. Senior EM/ICU help. High flow O2. Serum lactate. Blood cultures. Fluids (20ml/kg bolus): 75% <1hr, 90% <2hrs. Antibiotics: 50% <1hr, 90% <2hrs. Urine output monitoring.
    *   **Relevance:** Broad quality framework and specific condition standards. (Note: Older, but principles may underpin newer guidelines if not directly superseded).

3.  **Document Title: Clinical Streaming in the Accident and Emergency (A&E) Department (NHS England & NHS Improvement, Published: July 2017)**
    *   **Core Focus:** Guidance to support clinical streaming in A&E, including to co-located primary care services.
    *   **Rationale for Streaming:**
        1.  Align skill mix of A&E and co-located services with casemix.
        2.  Prioritise patients with time-critical/sensitive illness or injury.
        3.  'Front load' simple assessments, painkillers, investigations.
    *   **Key Principles:**
        *   "Front door" managed by acute trust (quality improvement & governance).
        *   Clinical streaming at ED front door (incl. to primary care) should be integrated, always by a trained clinician.
        *   Shared governance if clinicians from other services work in streaming.
        *   **Streaming Timeframe:** As soon as possible, always within 15 minutes of patient's arrival. Capacity planned for variation, not average demand.
        *   **Process:** Typically brief history, basic observations. Info can support triage prioritisation.
        *   **EWS:** Include calculation of NEWS (adults) or paediatric equivalent. EWS part of acuity assessment, not sole basis for streaming.
        *   Patient safety paramount in streaming design.
        *   Initial assessment should improve overall care quality and patient experience.
        *   Assumes relevant urgent care services are co-located. Protocols for immediate return to A&E if needed. Redirection to other sites needs further safeguards (appropriate, safe, off-site service accepts).
    *   **Relevance:** Details the principles and operational aspects of clinical streaming in A&E.

4.  **Document Title: NHS England: Guidance for Emergency Departments – Initial Assessment (Published: 12 August 2022)**
    *   **Core Focus:** Updated guidance on initial assessment, streaming, triage, and Rapid Assessment and Treatment (RAT), aiming to identify the sickest patients early and start treatment ASAP. Builds on/replaces previous guidance.
    *   **Time Thresholds:** Initial assessment of patients presenting to ED recommended to begin within 15 minutes of arrival. Ambulance handover (non-pre-alerted) within 15 mins.
    *   **Key Principles & Workflows:**
        *   **Patient Flow:** Manages unheralded (self-present), heralded (NHS 111, ambulance).
        *   **Initial Assessment Objectives:** Identify/prioritise life-threatening conditions; accurately assess non-life-threatening for appropriate service; prevent ED crowding; recognise vulnerable patients.
        *   **Recommendations:** Start ASAP, patient aware of responsible clinician, resourced for demand, clear signage, support for communication needs, IPC measures.
    *   **Definitions of Initial Assessment Activities:**
        *   **Streaming:**
            *   **Definition:** Clinical activity directing patients to the most appropriate service (ED, UTC, SDEC, specialty unit, off-site redirection) based on presenting symptoms, chief complaint, acuity. Often the first clinical activity.
            *   **Process:** Brief medical history, basic observations (NEWS/PEWS), simple first aid/analgesia/tests. Performed by registered, trained clinicians.
            *   **Outcomes:** Transfer of care to an appropriate area/service.
        *   **Triage:**
            *   **Definition:** Clinical process to prioritise patients before full assessment, identifying time-critical needs and assigning a priority.
            *   **Process:** Meaningful face-to-face clinical assessment, may include observations and use of triaging tools (e.g., Manchester Triage System, CTAS, ESI). Typically longer than streaming.
        *   **Rapid Assessment and Treatment (RAT):**
            *   **Definition:** Initiation of investigations and treatment by a team including senior decision-makers (consultants, middle grades, ACPs).
            *   **Process:** Most complex form of initial assessment, incorporates streaming and triage. For most unwell patients. Takes longer (e.g., 20-30 mins).
    *   **Associated Flow Outcomes (may be an outcome of initial assessment but not part of it):**
        *   **Redirection:** Signposting patient to services (e.g., community pharmacy, dental) after streaming/triage. Patient's choice to use, no formal handover.
        *   **Referral:** After full assessment in an emergency care facility, decision to refer to another specialty. Full ECDS ED episode occurred.
        *   **Navigation:** Pre-ED direction to services, not based on clinical assessment by ED.
    *   **Counting & Coding:** Use ECDS v3 for all initial assessment activity. Key fields: arrival mode, attendance source, times, chief complaint, acuity.
    *   **Training:** Staff must be registered healthcare professionals, competent in UEC, with appropriate training and interpersonal skills. Documented competency framework. Experienced reception staff are adjuncts, not replacements for clinician assessment.
    *   **Recency:** Most recent overarching guidance on initial assessment processes.
    *   **Relevance:** Defines current best practice for initial assessment, streaming, triage, and RAT models in English EDs.
`;

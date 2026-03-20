---
slug: /condor/ta_913/features
id: ta_913-features
sidebar_label: Features
title: Condor - TA-913 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Condor TA-913 aviation tracker and how its message and event capabilities work with Plaspy
keywords:
  - Condor TA-913
  - Condor TA-913 features
  - Condor TA-913 GPS tracker
  - TA-913 aviation tracker
  - TA-913 satellite messaging
  - TA-913 Bluetooth gateway
  - Condor tracker Plaspy
  - TA-913 panic button
  - TA-913 POI marker
  - aviation tracking Plaspy
---

# Condor - TA-913 Features

This page provides a public feature overview for using the Condor TA-913 aviation tracker with Plaspy. It focuses on the device capabilities that are relevant for operators, dispatchers, and fleet managers who want to understand how TA-913 events and messages appear inside Plaspy workflows and dashboards.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, and how the manufacturer implements a given function. Users should treat this summary as a usage-oriented guide and consult Condor for the most current device specifics.

## Feature Overview

The TA-913 is a compact aviation communications and tracking unit designed for fixed wing and rotary wing operations. In combination with Plaspy it provides a path for status messages, crew-initiated events, and short satellite text exchanges to reach ground control and fleet management tools.

- Aviation focused controls and layout for crew use in cockpit environments
- Panic button for rapid emergency signaling to ground teams via Plaspy
- POI marker button to log and transmit important locations during a flight
- Ground-call notification button to signal the crew when ground control needs to talk after a radio loss
- Satellite text messaging for short crew to ground exchanges using a Bluetooth paired device
- Bluetooth gateway to pair a smartphone or tablet as a user interface and messaging conduit

## Core Features of Condor - TA-913

- Purpose built for fixed wing and rotary wing aviation operations
- Panic button that generates an emergency event for dispatcher attention
- Point of interest marker button to record and transmit location markers
- Ground-call notification button to alert cockpit crews of incoming ground communications
- Satellite text messaging capability to exchange short messages between aircraft and ground
- Bluetooth gateway for pairing with a smartphone or tablet as the communication interface
- Pilot friendly buttons and an installation form factor suitable for aircraft cabins

## How These Features Work with Plaspy

When a TA-913 is integrated into Plaspy, its events and messages become part of a centralized operational picture for aircraft and crews. Plaspy ingests the tracker inputs, presents them in dashboards and maps, and preserves message and event history for review.

- Plaspy displays device-originated alerts and status messages in real time for operator awareness
- Button-initiated events such as panic and POI are forwarded to Plaspy so dispatchers can coordinate responses
- Satellite text messages are captured in Plaspy’s communications logs for traceability and archiving
- Bluetooth-linked device activity is surfaced as part of the TA-913 event stream where applicable
- Plaspy automatically detects compatible tracker protocols and associates TA-913 events with the correct asset record

## Typical Use Cases

- Emergency signaling and rapid responder coordination for in-flight incidents
- Loss-of-radio contingency workflows using ground-call notifications and satellite texts
- Recording and transmitting mission critical POI markers for mapping and debrief
- Crew to ground short message exchanges when primary voice channels are unavailable
- Fleet level situational awareness by aggregating TA-913 events across multiple aircraft
- Post-flight incident review using archived messages and event logs

## Feature Availability Notes

- Feature behavior depends on the TA-913 firmware and manufacturer configuration choices
- Hardware revisions or region specific variants may change which functions are present
- Installation method and integration choices in the aircraft can affect available controls and interfaces
- Plaspy will surface events and messages as they are reported by the device; exact payloads and labels depend on device firmware
- Consult Condor documentation for device specific limitations and operational advisories

## Why Use Plaspy with These Features

Using the TA-913 with Plaspy helps organizations centralize aircraft messaging and event data into a single operational interface. Plaspy makes button-initiated events, satellite text exchanges, and device status visible to dispatchers and fleet managers so teams can prioritize responses, maintain communications logs, and review mission activity.

To learn more about how Plaspy supports aircraft trackers like the TA-913, visit https://www.plaspy.com. For the latest device specific feature details, firmware updates, and manufacturer guidance, verify information on the Condor website https://condorskyseeker.com/ as implementations and capabilities can change over time.

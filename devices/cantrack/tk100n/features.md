---
slug: /cantrack/tk100n/features
id: tk100n-features
sidebar_label: Features
title: CanTrack - TK100N Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the CanTrack TK100N GPS tracker and how it integrates with Plaspy for fleet tracking and anti theft
keywords:
  - CanTrack TK100N
  - TK100N features
  - CanTrack GPS tracker
  - GT06N protocol
  - 2G vehicle tracker
  - real time tracking
  - ACC detection
  - SOS panic
  - remote relay control
  - Plaspy compatible tracker
---

# CanTrack - TK100N Features

This page summarizes the public feature context for using the CanTrack TK100N tracker with Plaspy. It focuses on the practical capabilities, how those capabilities map into Plaspy for monitoring and control, and the typical operational scenarios where the device is used. The goal is to help fleet managers, security teams, and integrators understand what to expect when pairing this model with Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Use this page as a functional overview and consult the device manufacturer and install documentation for the most current device specific details.

## Feature Overview

The TK100N is a hard wired 2G vehicle tracker designed for professional deployments and Plaspy compatibility out of the box. It provides reliable position reporting, event detection, and remote control capabilities that are useful for fleet oversight and anti theft workflows.

- Real time location reporting using GPRS with TCP IP reporting and SMS fallback for resilient telemetry.
- GT06N protocol compatibility for quick integration into Plaspy and standardized message parsing.
- Ignition or ACC detection to segment trips and support operational reports for starts and stops.
- SOS panic and alarm signals including vibration and power off alerts that surface as events in Plaspy.
- Remote relay control to support immobilizer or engine cut actions where installation and local law permit.
- Compact hard wired form factor and wide operating voltage range suitable for cars motorcycles and e bikes.

## Core Features of CanTrack - TK100N

- GT06N protocol compatibility for straightforward message ingestion by Plaspy.
- Real time tracking over GPRS TCP IP with SMS fallback to maintain reporting when data is limited.
- ACC detection to report ignition status for trip segmentation and idling visibility.
- SOS panic input and alarm reporting for rapid incident notification inside Plaspy.
- Remote relay control for immobilizer style remote cut or recovery workflows.
- High sensitivity MTK GNSS receiver with typical position accuracy around 10 meters for dependable positioning.
- Wide operating voltage range that supports a variety of vehicle electrical systems.
- Compact and discreet module design for installation on cars motorcycles and e bikes.

## How These Features Work with Plaspy

When the TK100N is used with Plaspy the tracker streams location and event messages that Plaspy parses and displays in the platform. Plaspy automatically detects compatible tracker protocols and maps position and alarm data into dashboard views and alert rules for operational visibility.

- Live position updates and movement history appear in the Plaspy map and device timeline.
- ACC or ignition events are represented in trip reports and can be used to generate idling and drive time insights.
- Alarm events such as SOS panic vibration and power off are forwarded to alert channels and incident logs.
- Remote commands for relay control can be issued from Plaspy or relayed through a configured server to allow centralized intervention.
- SMS fallback and voice monitoring paths provide redundant control and verification when data connectivity is constrained.

## Typical Use Cases

- Fleet operations monitoring with live location and trip segmentation for dispatching and route oversight.
- Anti theft protection combining SOS alerts vibration and power off notifications with remote relay control for recovery.
- Motorcycle and e bike asset protection using a compact low draw tracker adapted to two wheel installations.
- Driver behavior and operational compliance where ignition events and movement history help verify activity.
- Telemetry driven logistics for inventory oversight route optimization and loss prevention.
- Rental or shared vehicle management that benefits from remote status checks and immobilization options.

## Feature Availability Notes

- Firmware versions and manufacturer configuration options can change available functions and command syntax.
- Hardware revisions or regional variants may alter supported cellular bands or included interfaces.
- Installation choices such as wiring location and integration with vehicle systems affect which sensors and inputs are usable.
- SMS fallback and voice or listen features may be subject to regional regulations and operator availability.
- Always verify which features are enabled on a specific unit and how they are activated by consulting the official documentation.

## Why Use Plaspy with These Features

Using the TK100N with Plaspy provides a practical combination of field proven tracker features and a platform designed for fleet visibility and operational oversight. Plaspy ingests GT06N messages for reliable mapping of location and event data allowing teams to monitor assets centrally, respond to alarms, and execute remote actions when appropriate.

Learn more about Plaspy and how it supports trackers like the TK100N on the main website https://www.plaspy.com. For the latest device specific feature details firmware behavior and manufacturer guidance verify current documentation at the official CanTrack site https://www.cantrackgps.com/

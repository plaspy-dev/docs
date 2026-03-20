---
slug: /ulbotech/t373/features
id: t373-features
sidebar_label: Features
title: Ulbotech - T373 Features
sidebar_class_name: menu_item_tracker
description: Key features and practical capabilities of the Ulbotech T373 GPS tracker and how it integrates with Plaspy monitoring
keywords:
  - Ulbotech T373
  - Ulbotech T373 features
  - Ulbotech T373 GPS tracker
  - T373 OBDII capabilities
  - T373 GPS GLONASS
  - T373 WIFI hotspot
  - T373 driver behavior
  - Plaspy compatible trackers
  - T373 fleet tracking
  - Ulbotech T373 functions
---

# Ulbotech - T373 Features

This page summarizes the public feature context for using the Ulbotech T373 GPS tracker with Plaspy. It describes the practical capabilities reported for the device and explains how those capabilities can be used inside Plaspy for location awareness, vehicle data monitoring, and operational oversight.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, and manufacturer implementation. The information below is based on the current device description provided for this model and is intended as a useful, non-sensitive overview rather than a full technical specification.

## Feature Overview

The Ulbotech T373 provides a mix of positioning, vehicle data access, connectivity, and driving behavior monitoring that is useful for fleet and asset monitoring. When paired with Plaspy, these capabilities enable location tracking, status visibility, and data-driven operational decisions.

- Built-in GNSS positioning with support for GPS and GLONASS for reliable location reporting.
- Integrated cellular and WIFI connectivity options, including hotspot and WIFI bridging capabilities for local internet sharing and alternative internet access.
- On-board Diagnostics OBDII and SAE J1939 access to vehicle telematics such as speed and engine parameters.
- 3D acceleration based motion detection and driving behavior analysis for basic event detection and driver monitoring.
- Immobilizer output for remote engine cut off or anti-theft control where supported by the installation.

## Core Features of Ulbotech - T373

- GPS and GLONASS positioning using an internal GNSS module for consistent location fixes.
- Assist Now AGPS support and high-gain antenna functionality to improve fix time and signal reliability.
- Integrated 4G LTE and WIFI functions enabling the device to act as a local WIFI hotspot for multiple devices.
- WIFI bridging to leverage nearby wireless networks as an alternate data backhaul to reduce cellular data use.
- OBDII and SAE J1939 vehicle interface for reading real-time vehicle information and Diagnostic Trouble Codes.
- 3D accelerometer based detection for motion sensing and basic driving behavior classification.
- Immobilizer engine cut off output for anti-theft or remote immobilization workflows when wired and configured.

## How These Features Work with Plaspy

Plaspy can ingest and display the T373's supported data to give operators a unified view of location and vehicle status. The tracker can be configured to report to Plaspy and the platform will surface the available telemetry and events for monitoring and historical review.

- Plaspy automatically detects tracker protocol and ingests location and telematics sent by the T373.
- Position updates from GPS and GLONASS appear in Plaspy as live location points and historical tracks.
- Vehicle parameters available via OBDII are mapped to Plaspy device attributes so speed and engine data can be monitored when transmitted.
- Motion events and basic driving behavior triggers based on the device accelerometer can be shown as events or used to generate alerts.
- Connectivity status such as cellular or WIFI reachability can be reflected in device status indicators in Plaspy.
- The device may be configured to communicate with Plaspy using UDP or TCP on the platform port; Plaspy accepts tracker connections and handles incoming data automatically.

## Typical Use Cases

- Fleet location tracking and route history for delivery, service, or field operations.
- Real-time vehicle health and engine parameter monitoring using OBDII feeds.
- Driver behavior monitoring and event detection for safety coaching and fuel efficiency analysis.
- Anti-theft measures and remote immobilization workflows using the immobilizer output.
- Temporary internet sharing in a vehicle via the device WIFI hotspot for connected devices.
- Reducing cellular usage by using WIFI bridging to leverage available hotspots.

## Feature Availability Notes

- Manufacturer firmware and hardware revisions can change which features are available or how they behave; check device-specific release notes.
- OBDII and SAE J1939 data availability depends on vehicle support and the specific OBD parameters exposed by the vehicle ECU.
- WIFI hotspot capacity, bridging behavior, and hotspot limits may vary by firmware and regional cellular regulations.
- Certain features require correct installation and wiring; some outputs such as immobilizer control are only available when installed by a qualified technician.
- Plaspy displays and stores the data the device transmits; features not sent by the tracker will not appear in the platform.

## Why Use Plaspy with These Features

Using Plaspy with the Ulbotech T373 helps organizations centralize location and vehicle information into a single monitoring platform. Plaspy's device-agnostic ingestion and automatic protocol detection make it straightforward to receive position updates, OBDII parameters, and motion events from compatible trackers and present them as actionable insights to operators.

If you want to learn more about how Plaspy can work with the Ulbotech T373 and other compatible trackers, visit https://www.plaspy.com. For the latest, device-specific technical details, firmware information, and official specifications from the manufacturer, please verify information on the Ulbotech website at http://www.ulbotech.com/.

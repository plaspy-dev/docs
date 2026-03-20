---
slug: /concox/vl106/features
id: vl106-features
sidebar_label: Features
title: Concox - VL106 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Concox VL106 GPS tracker and how it integrates with Plaspy for fleet tracking and telemetry
keywords:
  - Concox VL106 features
  - Concox VL106 GPS tracker features
  - VL106 Plaspy compatibility
  - VL106 vehicle tracker
  - INS aided tracker
  - multi constellation GNSS tracker
  - fleet tracking VL106
  - driver behavior monitoring
  - anti theft tracker
  - collision detection tracker
---

# Concox - VL106 Features

This page provides a public feature overview of the Concox VL106 and how its capabilities map to use on the Plaspy platform. It summarizes the practical, non sensitive aspects of the device you are likely to care about when evaluating compatibility, tracking behavior, and operational value in Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, and the manufacturer's implementation. For device specific technical limits, firmware release notes, and installation guidance consult the official Concox documentation and your hardware vendor before deployment.

## Feature Overview

The VL106 is an INS‑aided vehicle tracker designed for continuous positioning and motion telemetry in challenging GNSS conditions. It combines multi‑constellation GNSS with inertial navigation assist and vehicle I/O to deliver persistent location and event data suited for professional fleet, insurance, finance, and security workflows.

- INS assisted navigation to improve position continuity in tunnels, underground parking and GNSS degraded areas
- Multi constellation GNSS support for more reliable fixes across GPS BDS GLONASS and Galileo
- Integrated IMU for driving behavior insights and collision event capture
- Automotive I O including ACC ignition detection SOS panic and a relay output for remote immobilizer or power cut off
- Onboard storage and a small backup battery to preserve critical event data when connectivity is interrupted

## Core Features of Concox - VL106

- INS aided navigation combined with multi constellation GNSS for continuous positioning
- High positioning accuracy and fast acquisition behavior suitable for vehicle tracking
- Integrated 3 axis accelerometer and 3 axis gyroscope for motion and collision event logging
- Automotive inputs such as ACC ignition detection and SOS panic input for status reporting
- Relay output to support remote immobilizer or fuel power cut off workflows
- Onboard storage with local retention of event logs and a small backup battery to preserve data during outages
- Rugged compact automotive design with wide input voltage range and IP65 level environmental protection
- Cellular connectivity for real time reporting to cloud platforms such as Plaspy

## How These Features Work with Plaspy

Plaspy ingests the VL106 telemetry to provide live location, event awareness, and historical playback in a unified fleet management view. The device streams position and motion data that Plaspy converts into map markers, event timelines, and operational alerts for fleet teams and security operators.

- Real time location updates displayed on Plaspy maps for live fleet oversight
- ACC and ignition status reflected in Plaspy as vehicle on off and engine related events
- SOS panic and tamper signals routed into Plaspy alerting and escalation workflows
- Relay output can be tied to Plaspy driven commands or automated workflows for immobilizer style actions where supported by installation and policy
- High rate IMU captures for impact windows are available to Plaspy for collision analysis and post incident reconstruction
- Onboard storage ensures that critical events are delivered to Plaspy after temporary connectivity loss so historical context is retained

## Typical Use Cases

- Fleet management and route visibility for logistics and service fleets
- Usage based insurance and driving behavior programs that need motion and event telemetry
- Auto finance and repossession operations using remote immobilizer and status reporting
- Collision investigation and safety programs leveraging pre and post impact IMU data
- Anti theft and vehicle security with instant alerts and remote response actions
- Operations that require reliable tracking in tunnels parking garages and urban canyons

## Feature Availability Notes

- Specific telemetry rates, IMU capture windows, and event thresholds depend on device firmware and vendor configuration
- Hardware revisions or regional variants can affect cellular band support and I O mapping
- Installation wiring and vehicle integration determine availability of ACC ignition and relay functions
- Onboard storage capacity and backup battery retention times vary with firmware and device settings
- Always review the manufacturer release notes and installation guides for the exact behavior of a given unit

## Why Use Plaspy with These Features

Pairing the VL106 with Plaspy provides operational teams with a platform to visualize continuous location and motion data, convert events into automated workflows, and retain incident context even when connectivity is intermittent. Plaspy turns VL106 telemetry into live maps, alerts, historical replay, and reports that support safety programs, risk reduction, and efficient fleet operations.

To learn more about Plaspy and how the platform can work with Concox devices visit https://www.plaspy.com. For the most current device specifications firmware notes and installation guidance verify details on the manufacturer site https://www.iconcox.com/ as device features and firmware behavior can change over time.

---
slug: /box/box_solo/features
id: box_solo-features
sidebar_label: Features
title: Box - Box Solo Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Box Solo trailer GPS tracker and how it works with Plaspy for fleet and asset visibility
keywords:
  - Box Solo features
  - Box Solo GPS tracker
  - Box Solo Plaspy
  - Box tracker features
  - trailer tracking unit
  - quadband GSM GPS tracker
  - trailer position logging
  - vehicle tracking Box Solo
  - Box Solo capabilities
  - fleet tracking Box Solo
---

# Box - Box Solo Features

This page presents the public feature context for using the Box Solo trailer tracker with Plaspy. It summarizes the practical capabilities you can expect to see when integrating Box Solo devices into Plaspy for position reporting, event visibility, and basic connectivity. The content focuses on user facing functions and how those functions appear in Plaspy rather than on low level protocol details.

Exact feature availability for any given Box Solo unit can vary by firmware version, hardware revision, regional variant, and how the unit is installed. Installation choices, antenna selection, and manufacturer firmware behavior influence what is available in practice, so this page describes the typical, publicly documented capabilities of the model rather than device specific guarantees.

## Feature Overview

The Box Solo is designed for continuous trailer position logging with reliable GSM based transmission and local data buffering. It emphasizes simple installation and dependable communications suitable for fleet and trailer tracking deployments.

- Continuous position logging using high sensitivity GPS reception for improved fix acquisition.
- Quad band GSM GPRS communications for broad network coverage including support for US GSM bands.
- Local internal memory to store position data when cellular connectivity is unavailable.
- Backup battery to maintain tracking during primary power interruption.
- Configurable reporting based on time distance and angle change to balance precision and data usage.
- Sleep mode and low power behavior to reduce drain when the trailer is inactive.

## Core Features of Box - Box Solo

- High sensitivity GPS receiver for consistent location fixes across typical trailer installations.
- Quad band GSM GPRS communications to transmit location data to collection servers.
- Internal memory for offline storage of position and event records until communications resume.
- Built in backup battery to support continued tracking during short power interruptions.
- Position reporting triggers based on configurable time intervals distance thresholds and angle change.
- Support for both TCP and UDP communication modes for flexible server connectivity.
- Two digital inputs and one analogue input for basic external signal monitoring and integration.
- Compact form factor and three wire installation requiring positive negative and ignition feeds for straightforward mounting.

## How These Features Work with Plaspy

When connected to Plaspy, Box Solo units report location and event data that Plaspy presents for monitoring and historical analysis. Plaspy is able to detect the device protocol automatically and accept device reports using common transport modes.

- Location updates and stored history transmitted from the device appear in Plaspy maps and playback views for route and position review.
- Events tied to the device inputs and reporting triggers can be shown as discrete events inside Plaspy for operational awareness.
- Offline data stored in internal memory is collected and uploaded once cellular connectivity resumes so historical continuity is preserved.
- Devices may be configured to use TCP or UDP to reach Plaspy endpoints and Plaspy will detect protocol behavior for standard device flows.
- Sleep mode and power saving behavior reduce reporting frequency when a trailer is idle, which Plaspy reflects as reduced update cadence.

## Typical Use Cases

- Trailer tracking and location logging for fleet trailers in mixed deployment environments.
- Track and trace for asset retrieval and route reconstruction after delivery or movement.
- Supplementary monitoring for fleet managers needing consistent position history even when cellular gaps occur.
- Simple external sensor state monitoring using the device digital and analogue inputs for doors or auxiliary signals.
- Long term visibility for trailer pools where compact installation and battery backup are beneficial.

## Feature Availability Notes

- Firmware version and manufacturer configuration can change how reporting triggers and inputs behave on any given unit.
- Hardware revisions or regional variants may affect supported GSM frequency bands and certification markings.
- Installation methods, antenna choice and placement influence GPS and GSM performance and therefore reported accuracy.
- Some capabilities require appropriate configuration on both the device and Plaspy to be visible and actionable.
- Refer to manufacturer documentation for exact wiring details and to confirm regulatory approvals for your market.

## Why Use Plaspy with These Features

Combining Box Solo hardware with Plaspy gives organizations a straightforward path to centralized trailer visibility and historical playback. Plaspy receives location reports and events from the tracker, automatically recognizes the device protocol, and presents position history, event timelines, and status in a way that supports operational oversight and basic fleet workflows.

To learn more about how Plaspy works with devices like the Box Solo visit https://www.plaspy.com. For the most current and device specific technical details including firmware behavior installation guidance and regional variant information please verify with the manufacturer documentation at http://www.boxtelematics.com/. Device features and firmware implementations can change over time so always confirm current specifications with the manufacturer.

---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_pro/features
id: mta_glonass_ver12m_can_pro-features
sidebar_label: Features
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the MTA-Glonass ver12M CAN PRO tracker and how it works with Plaspy for fleet tracking and telemetry
keywords:
  - OKB Tehnoavtomatika
  - MTA Glonass ver12M CAN PRO
  - MTA Glonass features
  - vehicle tracker Plaspy
  - GNSS fleet tracking
  - CAN bus telemetry
  - fuel monitoring tracker
  - backup battery tracker
  - event logging telematics
  - Plaspy compatible tracker
---

# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) Features

This page provides a public overview of the feature set for the OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN-PRO) and how those capabilities are reflected when the device is used with Plaspy. It focuses on practical, non sensitive details about positioning, communications, I O options, and telemetry that matter to fleet operators and integrators using Plaspy for tracking and reporting.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, and manufacturer implementation. Where the MTA-Glonass includes optional interfaces or configuration choices, those elements may be present or omitted depending on the specific unit and how it was installed or provisioned.

## Feature Overview

The MTA-Glonass (ver.12M-CAN-PRO) is a professional vehicle monitoring terminal designed for reliable satellite positioning and vehicle telemetry. It emphasizes stable GNSS performance, multi channel communications, and vehicle bus integration to support real time tracking and historical reporting in Plaspy.

- High sensitivity GNSS receiver with Glonass support for accurate satellite positioning and responsive location updates.
- Multi channel communications including GPRS, SMS and a dedicated data channel to ensure telemetry delivery across cellular networks.
- Native CAN bus integration for retrieving engine and ignition state and other vehicle network parameters.
- Inputs for pulse and analog sensors plus an optional temperature interface and optional output for control or alarm workflows.
- Built in backup battery and low power modes to maintain event logging and buffer data during power interruptions.
- Event rich internal storage for buffered records and configurable event reporting to ensure continuity during connectivity loss.

## Core Features of OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO)

- High sensitivity 50 channel GNSS receiver with Glonass capability for consistent positional fixes.
- Multi channel cellular communications including GPRS, SMS, and a dedicated data channel for telemetry uplink and downlink.
- Direct CAN bus integration for engine, ignition, and vehicle network telemetry.
- Dry contact pulse input and analog ADC input for fuel sensors, pulse counters, or other analog telemetry.
- Optional 1 Wire temperature input for environmental monitoring in refrigerated transport scenarios.
- Optional open collector output to support remote control or alarm activation when installed.
- Built in rechargeable backup battery to provide standby tracking and event buffering during vehicle power loss.
- Configurable event logging and non volatile storage with large record capacity for historical reporting.

## How These Features Work with Plaspy

Plaspy ingests GNSS positions, CAN derived parameters, and input triggered events from the MTA-Glonass to deliver live tracking, alerting, and historical reports. The device buffers events locally when connectivity is interrupted and forwards stored records to Plaspy when the link is restored, helping preserve audit trails and continuity.

- Real time position updates and movement history appear in Plaspy dashboards for fleet visibility and route monitoring.
- CAN sourced signals such as ignition and engine state are available in Plaspy for trip detection and idle reporting.
- Pulse and analog inputs used for fuel or flow sensors are recorded and can feed consumption and anomaly reports in Plaspy.
- Optional temperature telemetry and external sensor inputs can be shown in Plaspy for cargo monitoring and environmental alerts.
- Event buffering on the device ensures records are delivered to Plaspy after temporary network outages, preserving continuity of logs.

## Typical Use Cases

- Fleet management and route oversight for buses, trucks, and service vehicles requiring GNSS accuracy and vehicle telemetry.
- Fuel monitoring and consumption analysis using pulse and analog inputs integrated into Plaspy reports.
- Anti theft workflows and remote control scenarios using event logging combined with the optional output for intervention.
- Remote diagnostics and maintenance planning based on CAN bus parameters and historical event data.
- Temperature sensitive cargo monitoring when the optional temperature interface is used with Plaspy alerts.

## Feature Availability Notes

- Some interfaces and functions are optional hardware or configurable features and may not be present on every unit of this model.
- Firmware versions and hardware revisions can change behavior for logging capacity, power management, and optional interfaces; check the installed firmware release for exact behavior.
- Installation details such as wiring to CAN, sensor inputs, and the optional output affect what data the device reports to Plaspy.
- Regional or carrier variants may alter available cellular bands or the supported communication modes.
- Always confirm sensor wiring and configuration with the installer and consult manufacturer documentation for wiring diagrams and electrical limits.

## Why Use Plaspy with These Features

Using the MTA-Glonass (ver.12M-CAN-PRO) with Plaspy gives fleet operators a practical combination of precise satellite positioning, vehicle bus telemetry, and flexible sensor inputs. Plaspy collects and presents location, event, and CAN derived information in a way that supports operational oversight, historical analysis, and configurable alerting without heavy integration work.

To learn more about how Plaspy supports trackers like this and to review platform capabilities please visit https://www.plaspy.com. For the most current device specific feature details, firmware behavior, and installation guidance verify information with the manufacturer at http://www.okb-ta.ru/.

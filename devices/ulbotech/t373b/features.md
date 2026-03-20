---
slug: /ulbotech/t373b/features
id: t373b-features
sidebar_label: Features
title: Ulbotech - T373B Features
sidebar_class_name: menu_item_tracker
description: Public overview of Ulbotech T373B OBD II GPS tracker features and how its telemetry and anti theft capabilities integrate with Plaspy
keywords:
  - Ulbotech T373B
  - T373B features
  - Ulbotech T373B GPS tracker
  - OBD II GPS tracker
  - Plaspy compatible tracker
  - vehicle telemetry OBDII
  - driver behaviour tracking
  - vehicle immobilizer
  - FOTA tracker
  - Bluetooth LE OBD tracker
---

# Ulbotech - T373B Features

This page provides a public feature overview of the Ulbotech T373B and explains how its capabilities map to monitoring and management inside Plaspy. It summarizes the device functionality that is relevant to fleet operators, integrators, and technical users considering the T373B for vehicle tracking and telemetry with Plaspy.

Exact feature availability and behaviour can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For critical deployments verify the specific capabilities, firmware behavior, and supported vehicle protocols with the manufacturer and check firmware release notes before large scale rollouts.

## Feature Overview

The T373B is a plug and play OBD II tracker designed to provide real time vehicle location plus rich onboard diagnostics and event reporting. It combines GNSS positioning, cellular telemetry, Bluetooth local connectivity, and OBDII/CAN diagnostics into a compact OBD II form factor for fast installations and fleet scale rollouts.

- Plug and play connection to the vehicle OBD II port for rapid deployment without permanent wiring.
- GNSS positioning using u blox MAX 7 with assisted A GPS for faster time to first fix in typical vehicle installations.
- Vehicle telemetry from OBD II and CANBUS including common diagnostics and DTC reporting for maintenance visibility.
- Anti theft support with an immobilizer digital output for remote engine cut and real time alerting.
- Bluetooth 4.0 LE for local mobile configuration and supplementary device pairing.
- Firmware over the air updates to keep devices current without manual retrieval.

## Core Features of Ulbotech - T373B

- OBD II interface for vehicle data access and ignition/status reporting using standard OBDII protocols.
- GNSS positioning (GPS plus GLONASS) for continuous location and trip tracking.
- Cellular modem designed for GSM/WCDMA family bands to deliver telemetry to cloud platforms.
- On board diagnostics and DTC alerts including support for SAE J1939 and J1708 J1587 where applicable.
- Immobilizer digital output to support remote engine cut functions for anti theft workflows.
- Internal 3 axis accelerometer and built in driving behaviour events for harsh event detection and driver scoring.
- Bluetooth 4.0 Low Energy for mobile based configuration and local feature extension.
- Firmware over the air support to manage updates remotely and reduce field maintenance.

## How These Features Work with Plaspy

When a T373B is connected to Plaspy, the device streams positional fixes, diagnostic data, and event notifications into the Plaspy platform so operators gain real time visibility and actionable alerts. Plaspy automatically detects supported tracker protocols and surfaces device reports on dashboards and logs for operational use.

- Location and trip data appear in Plaspy as continuous position updates, enabling mapping, route history, and live tracking.
- OBD II telemetry and DTC reports are available in Plaspy for maintenance alerts, fuel monitoring workflows, and service scheduling.
- Immobilizer events and remote engine cut signals can be reflected as device outputs and alert conditions for theft response processes.
- Driver behaviour events such as harsh braking or acceleration are transmitted to Plaspy for scoring, reporting, and coaching workflows.
- Bluetooth based local setup and accessory pairing are used for field configuration that complements remote management inside Plaspy.

## Typical Use Cases

- Fleet management for delivery, service, and transport fleets requiring rapid OBD II installation and real time tracking.
- Anti theft operations that combine location alerts with an immobilizer output for vehicle recovery and response.
- Rental and insurance telematics including mileage tracking, DTC reporting, and driver behaviour profiling.
- Roadside assistance and recovery where quick location and vehicle state reporting reduce response time.
- Driver coaching programs that use harsh event detection and trip summaries to improve safety and fuel efficiency.
- Preventive maintenance workflows driven by DTC alerts and vehicle telemetry.

## Feature Availability Notes

- Feature presence and exact telemetry fields depend on the device firmware version and the device hardware revision.
- Vehicle support for specific OBD II PIDs or SAE protocols varies by vehicle make, model year, and ECU implementation.
- Bluetooth and FOTA capabilities depend on unit configuration and may require specific firmware releases to enable.
- Regional cellular band availability may affect connectivity depending on the modem variant and local network coverage.
- Always confirm optional accessory support and required installation adapters with the manufacturer documentation.

## Why Use Plaspy with These Features

Using the Ulbotech T373B with Plaspy gives organizations a straightforward path to combine accurate positioning with vehicle diagnostics and driver behaviour insights. Plaspy collects and normalizes the tracker telemetry so fleet operators can monitor location, maintenance signals, and safety events from a single platform, reducing operational overhead and improving response times.

Learn more about Plaspy on the main website https://www.plaspy.com. Device features, firmware behavior, and manufacturer specifics can change over time; please verify the latest device specific details and firmware notes on the official Ulbotech site http://www.ulbotech.com/ before deploying at scale.

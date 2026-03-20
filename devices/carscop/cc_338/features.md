---
slug: /carscop/cc_338/features
id: cc_338-features
sidebar_label: Features
title: Carscop - CC-338 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Carscop CC-338 GPS tracker and how it works with Plaspy for fleet and car sharing
keywords:
  - Carscop CC-338
  - Carscop CC-338 features
  - Carscop CC-338 GPS tracker
  - CC-338 Plaspy
  - Carscop vehicle telematics
  - OBD II CANBUS tracker
  - 4G GPS tracker
  - car sharing tracker
  - fleet management tracker
  - remote immobilizer
---

# Carscop - CC-338 Features

This page provides a public, feature-oriented overview of the Carscop CC-338 and how its capabilities are used with Plaspy for vehicle tracking, fleet management, and car sharing. It summarizes the practical functions you can expect when the CC-338 is integrated into Plaspy and highlights how telemetry and command channels are exposed for operational workflows.

Exact feature availability for any installed unit can vary by firmware version, hardware revision, installation method, and the manufacturer implementation for a given vehicle. This page uses the manufacturer description of the CC-338 as the basis for public feature context; for device specific technical details always consult the official Carscop documentation.

## Feature Overview

The CC-338 is a compact 4G T-Box designed to add telematics, remote control, and vehicle telemetry to ordinary cars. It combines multi-network cellular connectivity with GPS positioning, OBD II CANBUS access, local Bluetooth control, and a set of wired outputs for remote actions, making it suitable for unattended rental, car sharing, and fleet operations.

- Real-time GPS tracking with A-GPS and cell tower fallback for improved availability in challenging conditions.
- Deep vehicle telemetry via OBD II CANBUS where the vehicle exposes relevant data for diagnostics and operational metrics.
- Multiple control channels including internet API, Bluetooth LE for local control, and wired outputs for door locks, lights, siren, and engine cut.
- Onboard data logging and last-known-position retention so events forward to Plaspy once connectivity is restored.
- Wide input voltage range and backup battery support for both 12V and 24V vehicle fleets.

## Core Features of Carscop - CC-338

- Multi-network cellular support for 4G 3G and 2G to maximize coverage for telemetry and remote commands.
- OBD II CANBUS interface enabling vehicle diagnostics and telematics forwarding where available from the vehicle CAN.
- A-GPS positioning with LBS cell tower fallback and configurable GPS upload behavior.
- Bluetooth Low Energy for local offline control and proximity workflows.
- Wired control outputs for central locking, siren, lights, horn and an engine-cut immobilizer function.
- Ignition ACC and door alarm inputs plus shock and G-sensor triggers for event detection.
- Onboard logging with rechargeable backup Li-battery to retain data and alert on power loss.
- Over the air firmware update capability and open TCP/IP API connectivity for integrators.

## How These Features Work with Plaspy

When connected to Plaspy, the CC-338 streams vehicle location and telemetry into a unified fleet management environment so operators can monitor vehicles, respond to alarms, and issue remote commands. Plaspy can receive data from the device and surface events, historic logs, and control actions for operational workflows.

- Real-time location updates and historic tracks appear in Plaspy for live monitoring and reporting.
- Ignition ACC state, door open events, sensor alarms and similar inputs are forwarded to Plaspy as events for usage and safety reporting.
- Vehicle CANBUS telemetry such as engine and diagnostic parameters are reported into Plaspy dashboards where available from the vehicle.
- Remote immobilizer and wired output commands may be issued through Plaspy integration to support anti-theft and rental enforcement workflows.
- Bluetooth LE based local control and BLE sensor events can support proximity driven workflows, with actions coordinated through Plaspy when combined with server-side logic.
- Devices can be configured to connect to Plaspy servers such as d.plaspy.com using TCP or UDP on the standard port; Plaspy automatically detects the tracker protocol for integration.

## Typical Use Cases

- Unattended car rental and self service car sharing with remote locking, user authentication via app or BLE, and usage billing tied to ignition data.
- Fleet tracking and operational oversight where real-time location and vehicle telemetry support dispatch and maintenance planning.
- Anti-theft monitoring and remote immobilization with alarm notifications for doors, shock events, and power loss.
- Vehicle diagnostics and fuel related reporting forwarded from vehicle CAN when those parameters are exposed by the car.
- Local offline access and short range unlocking using Bluetooth LE for secure proximity workflows.
- Scheduled maintenance triggers based on mileage or diagnostic data collected via OBD II CANBUS.

## Feature Availability Notes

- Feature sets can differ by firmware level and manufacturer release; not every unit will expose all capabilities out of the box.
- Some telemetry and control functions depend on what the vehicle exposes over its OBD II CANBUS and may vary by make, model, and year.
- Installation choices and wiring (for wired outputs and alarm inputs) affect which control channels are available after fitting the unit.
- Regional cellular variants may change supported bands and network behavior; verify network compatibility for your deployment area.
- Plaspy integration options include TCP or UDP connectivity; consult both Plaspy and Carscop documentation for recommended configuration for private server deployments.

## Why Use Plaspy with These Features

Pairing the CC-338 with Plaspy gives operators a single pane for location awareness, event monitoring, and remote control. Plaspy ingests the tracker telemetry and presents it alongside vehicle state and historical logs so teams can run car sharing workflows, respond to alarms, and manage fleet health from one platform. The open API and TCP/IP connectivity of the CC-338 reduce integration friction for custom workflows and private server setups.

Learn more about Plaspy and how it can be used with compatible trackers at https://www.plaspy.com. Device features, firmware behavior, and manufacturer implementation can change over time, so verify the latest device specific information and technical documentation on the Carscop website at http://www.carscop.com/.

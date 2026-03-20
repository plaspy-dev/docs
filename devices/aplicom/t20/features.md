---
slug: /aplicom/t20/features
id: t20-features
sidebar_label: Features
title: Aplicom - T20 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Aplicom T20 tracker and how its LTE M connectivity dual CAN and industrial I O integrate with Plaspy for fleet telematics
keywords:
  - Aplicom T20
  - Aplicom T20 features
  - Aplicom T20 GPS tracker
  - T20 telematics gateway
  - Aplicom LTE M tracker
  - T20 CAN bus
  - T20 peripheral IO
  - T20 OTA management
  - Plaspy compatible tracker
  - fleet tracking T20
---

# Aplicom - T20 Features

This page describes the public feature context for using the Aplicom T20 with Plaspy. It summarizes the tracker capabilities relevant to vehicle and mobile asset tracking, telemetry capture, and remote device management when the T20 is integrated into Plaspy for real time monitoring and operational oversight.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, and manufacturer implementation. For device specific technical details, firmware notes, and the latest supported peripherals consult the manufacturer documentation and release notes.

## Feature Overview

The Aplicom T20 is a compact telematics gateway designed for reliable vehicle and mobile equipment tracking and telemetry forwarding to cloud platforms such as Plaspy. It focuses on efficient IoT connectivity, on device edge processing, industrial peripheral support, and fleet scale device management.

- LTE M cellular connectivity for IoT optimized communications and long term network support suitable for continuous tracking.
- Dual CAN bus interfaces to read vehicle and machine diagnostics and provide advanced telemetry to cloud systems.
- Multiple industrial I O ports for peripherals such as iButton readers keypads RFID readers and temperature sensors to capture event driven inputs.
- Aplicom SDK and on device edge processing to filter or aggregate telemetry before sending to Plaspy reducing data volume and cloud cost.
- Over the air management via Aplicom Silver Cloud for remote configuration firmware updates and deployment of custom edge applications.
- Compact form factor for installation in vehicles trailers and mobile equipment.

## Core Features of Aplicom - T20

- LTE M cellular link optimized for low power IoT telematics communications.
- Dual CAN bus ports for capturing vehicle and machine diagnostics directly from CAN networks.
- Industrial I O support for peripherals including iButton readers keypads RFID readers and temperature sensors.
- Aplicom SDK for developing custom edge applications and preprocessing telemetry on the device.
- Silver Cloud OTA management for remote configuration and firmware deployment.
- Edge filtering and aggregation to reduce cellular data usage and send only relevant events.
- Compact rugged enclosure suited for vehicle and mobile asset installations.

## How These Features Work with Plaspy

When integrated with Plaspy the T20 forwards processed location telemetry and event data so that fleet operators and integrators can monitor assets in real time and act on diagnostic or peripheral events. Edge logic on the device can be used to control the volume and timing of events sent to Plaspy.

- Real time location and telemetry updates appear in Plaspy maps and dashboards for live monitoring and route analysis.
- CAN bus telemetry and diagnostic events can be reported to Plaspy for vehicle health visibility and operational reporting when those signals are available on the vehicle network.
- Peripheral events from iButton RFID keypads and temperature sensors are delivered as discrete events to Plaspy for access control cargo monitoring and condition alerts.
- OTA configuration and firmware updates are managed on the device side and coordinated with Plaspy workflows for fleet scale maintenance.
- Edge preprocessing reduces unnecessary data so Plaspy receives concise event streams for alerts reporting and historical analysis.
- Integrator implemented anti theft or immobilizer workflows that rely on vehicle CAN or external I O can be reflected in Plaspy as monitored events or actionable items when configured by the installer.

## Typical Use Cases

- Real time fleet tracking and route monitoring for light and heavy vehicles with integrated telemetry.
- Heavy machinery and construction equipment diagnostics and uptime monitoring using CAN data.
- Trailer cargo protection and temperature sensitive logistics with RFID and temperature sensor inputs.
- Anti theft workflows and integrator implemented immobilization tied to peripheral inputs and CAN signals.
- Industrial IoT projects requiring edge filtering OTA management and multisensor aggregation.
- Long term deployments that benefit from LTE M network optimizations for lower power telemetry.

## Feature Availability Notes

- Feature support depends on firmware version and the specific hardware revision of the T20; capabilities can change across releases.
- Availability of particular CAN signals and diagnostic parameters depends on the vehicle or machine CAN implementation and may require custom configuration.
- Peripheral compatibility depends on connector wiring firmware support and any required drivers or configuration via Aplicom SDK.
- Regional cellular band support and LTE M availability vary by market and mobile operator.
- Confirm current feature lists and supported peripherals with Aplicom product documentation and release notes.

## Why Use Plaspy with These Features

Using the Aplicom T20 with Plaspy gives organizations a practical path to centralized visibility and operational oversight across vehicle and mobile equipment fleets. The combination of dual CAN connectivity industrial I O and on device edge processing enables efficient capture of diagnostics and peripheral events while minimizing unnecessary data transfer to the cloud.

To learn more about Plaspy and how it can integrate with devices like the Aplicom T20 visit https://www.plaspy.com. For the most current device specific feature details firmware notes and compatibility information consult the manufacturer at https://www.aplicom.com/.

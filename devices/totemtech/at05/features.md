---
slug: /totemtech/at05/features
id: at05-features
sidebar_label: Features
title: Totemtech - AT05 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for Totemtech AT05 GPS tracker and how its capabilities work with Plaspy
keywords:
  - Totemtech AT05
  - Totemtech AT05 features
  - Totemtech AT05 GPS tracker
  - AT05 features
  - AT05 GPS tracker features
  - Totemtech tracker Plaspy
  - AT05 OTA upgrade
  - AT05 accelerometer
  - vehicle tracking AT05
  - AT05 alarms
---

# Totemtech - AT05 Features

This page describes the public feature context for using the Totemtech AT05 GPS tracker with Plaspy. It summarizes the device capabilities that matter for location visibility, event monitoring, and remote management when the AT05 is paired with the Plaspy platform.

Exact feature availability and behavior can vary by firmware level, hardware revision, installation method, and manufacturer implementation. Use this page as a general guide and consult device documentation and your installer for specifics about a particular unit or deployment.

## Feature Overview

The AT05 is a versatile tracker designed for reliable location reporting, event alerts, and remote configuration. In practical operation it supports simultaneous reporting to two servers, movement detection via a built in accelerometer, remote commands, and over the air firmware updates, making it suitable for many tracking workflows.

- Simultaneous data transmission to two servers so primary and backup monitoring can run in parallel.
- Movement and status monitoring using the 3-axis digital accelerometer for better motion detection.
- Remote command support over GPRS and SMS for configuration and control when needed.
- OTA firmware upgrade capability to deploy updates without physical access to the device.
- Real-time tracking and history trace features for live monitoring and retrospective analysis.

## Core Features of Totemtech - AT05

- Dual server reporting allowing data to be sent to two destinations at the same time.
- 3-axis digital accelerometer for movement detection and tremble related alarms.
- Over the air firmware upgrade support for remote firmware management.
- Support for a wide DC input range with over-voltage protection for varied vehicle power systems.
- Remote command interface via GPRS and SMS for device management and queries.
- Real-time location reporting plus history trace retrieval for past movement review.
- Multiple alarm types supported including over-speed, low power, parking, SOS, exterior power off, and internal power low.

## How These Features Work with Plaspy

Plaspy receives and processes tracker data so you can view location, events, and history in a single system. The AT05 can be pointed at Plaspy’s collection endpoint, and Plaspy will recognize standard tracker traffic and present device activity in the platform.

- Plaspy can accept the AT05 reporting alongside a backup server to preserve continuity of monitoring.
- Accelerometer driven movement and tremble events reported by the device are shown as movement or alarm events in Plaspy.
- Real-time positions and history traces sent from the tracker become map markers and timeline traces in the Plaspy interface.
- Remote commands initiated from authorized tools or workflows can be sent to the device using supported command channels and reflected in Plaspy event logs.
- OTA update status and certain device alarms reported by the AT05 can be logged for operational oversight within Plaspy.

## Typical Use Cases

- Vehicle fleet location tracking with live position updates and trip history.
- Asset movement detection and tamper or tremble alerting using the accelerometer.
- Remote device management including configuration changes and OTA firmware updates.
- Redundant server reporting to ensure data availability for operations and backup systems.
- Power related monitoring and alerts for exterior power loss or low internal power conditions.
- SOS and emergency alert monitoring for prioritized response workflows.

## Feature Availability Notes

- Firmware version can change which features are available or how alarms behave; check your device firmware level.
- Hardware revisions or regional variants of the AT05 may alter I/O options or supported alarm types.
- Installation wiring and power setup can affect power related alarms and device reliability.
- Some remote command or alarm behavior may depend on network availability and SMS support in the region.
- Manufacturer configuration settings determine exactly which I/O ports are active and how user defined inputs behave.

## Why Use Plaspy with These Features

Using the Totemtech AT05 with Plaspy gives organizations a consistent way to consolidate device telemetry, alarms, and history traces into a single monitoring and reporting environment. Plaspy helps translate the AT05’s movement detection, dual server reporting, remote command support, and OTA updates into operational visibility that can support fleet management, asset oversight, and incident response.

Learn more about Plaspy and how the platform can present AT05 data and alerts on the main Plaspy website https://www.plaspy.com. For the most current device specific feature details, firmware behavior, and manufacturer instructions please verify information with the official Totemtek documentation at http://www.totemtek.com/.

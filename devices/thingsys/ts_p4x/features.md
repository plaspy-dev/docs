---
slug: /thingsys/ts_p4x/features
id: ts_p4x-features
sidebar_label: Features
title: ThingSys - TS-P4X Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the ThingSys TS P4X magnetic heavy duty container GPS tracker and Plaspy compatibility
keywords:
  - ThingSys TS P4X
  - TS P4X features
  - ThingSys GPS tracker
  - container GPS tracker
  - magnetic GPS tracker
  - TS P4X Plaspy
  - GPRS GPS tracker
  - blind area buffer
  - geofence GPS tracker
  - OTA firmware upgrades
---

# ThingSys - TS-P4X Features

This page describes the public feature context for the ThingSys TS-P4X when used with Plaspy. It focuses on the practical capabilities you can expect to see in fleet dashboards, event streams, and historical playback without reproducing private configuration details. The content is written to help fleet managers, integrators, and technical evaluators understand how the TS-P4X maps to Plaspy visibility and workflows.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For device specific parameters and the latest technical details consult official ThingSys documentation and release notes before deployment.

## Feature Overview

The TS-P4X is a heavy duty magnetic GPS tracker intended for long-term container, trailer, and non powered asset monitoring. It combines extended battery operation, rugged mounting, and networked reporting to deliver reliable location and event visibility into platforms such as Plaspy.

- Long duration operation from a high capacity rechargeable backup battery for deployments without continuous external power.
- Strong integrated magnets and compact form factor for secure exterior mounting to containers and chassis.
- Multi generation cellular support with GPRS data transmission to report location and telemetry to cloud platforms like Plaspy.
- Robust GNSS positioning using an integrated Skylab SKG1612R receiver for reliable location updates.
- Large blind area buffer that stores thousands of records and forwards them when connectivity returns.
- Remote management capabilities including OTA firmware upgrades and configurable geofences to simplify large scale deployments.

## Core Features of ThingSys - TS-P4X

- Plaspy compatible reporting for seamless ingestion of location and event streams.
- High capacity 15,000 mAh rechargeable backup battery for long deployment intervals.
- Strong magnetic mounting and a compact durable enclosure sized for exterior container use.
- Multi network cellular support with GPRS based telemetry for efficient reporting.
- Skylab SKG1612R GNSS receiver for consistent positioning and fast start performance.
- Up to 25 configurable geo fences for perimeter monitoring and entry exit alerts.
- Blind area storage with capacity for a large number of records so history is retained during coverage gaps.
- Remote configuration and FOTA OTA firmware upgrade support to reduce field maintenance.

## How These Features Work with Plaspy

When configured to report to Plaspy, the TS-P4X transmits positional fixes, alarm events, and stored blind area records so Plaspy can present a continuous operational picture. Plaspy automatically detects common tracker protocols and accepts GPRS reports from the device for real time monitoring and historical analysis.

- Real time location updates and history playback in Plaspy dashboards based on device reports.
- Discrete alarm events such as lock ON/OFF and tamper lock string are received and surfaced for anti theft workflows.
- Geofence entry and exit alerts from the TS-P4X appear as platform events and can be routed to notifications or automation rules.
- Blind area records stored by the device are forwarded after connectivity restoration to preserve continuity of location history.
- Remote configuration and OTA firmware upgrades can be coordinated through Plaspy or management servers to keep device fleets updated.
- Devices may be configured to send data to Plaspy endpoints using UDP or TCP on the standard Plaspy port and Plaspy will match the tracker protocol automatically.

## Typical Use Cases

- Long term container monitoring during intermodal transport where external power is not available.
- Trailer and cargo anti theft workflows using tamper detection and lock state reporting.
- Fleet visibility for non powered assets where blind area buffering preserves historical location data.
- Logistics monitoring in extended deployments where rugged mounting and battery life are critical.
- Large scale deployments that require remote configuration and OTA updates to minimize field visits.
- Correlation of TS-P4X location streams with platform level operational data for combined insights.

## Feature Availability Notes

- Feature set depends on firmware version and may change with OTA updates or manufacturer revisions.
- Hardware variants and regional cellular options can affect supported network bands and connectivity behavior.
- Installation method and mounting location influence GNSS performance and battery life in real world use.
- Geofence counts, blind area capacity, and alarm behavior should be validated against the device firmware revision in use.
- Consult ThingSys documentation for the exact command set, radio variants, and regional certification details.

## Why Use Plaspy with These Features

Pairing the TS-P4X with Plaspy gives organizations a practical way to turn rugged, long duration device reports into actionable operational visibility. Plaspy ingests the TS-P4X location stream, alarms, and stored records so teams can monitor asset movement, respond to tamper or lock events, and maintain continuous history even through coverage gaps.

To learn more about how Plaspy supports fleet and asset tracking visit https://www.plaspy.com. For the most current device specific feature details, firmware behavior, and manufacturer guidance verify information on the ThingSys website https://www.thingsys.com/ as device features and implementations can change over time.

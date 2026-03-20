---
slug: /topfly/knightx_300/features
id: knightx_300-features
sidebar_label: Features
title: TopFly - KnightX 300 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the TopFly KnightX 300 tracker and how it works with Plaspy for asset and cold chain monitoring
keywords:
  - TopFly KnightX 300
  - KnightX 300 features
  - TopFly GPS tracker
  - KnightX 300 Plaspy
  - cold chain tracking
  - BLE asset tracker
  - rechargeable asset tracker
  - GNSS multi constellation
  - LTE Cat M1 tracker
  - buffered logging
---

# TopFly - KnightX 300 Features

This page provides a public feature overview of the TopFly KnightX 300 and how the device integrates with Plaspy for tracking, telemetry ingestion, and sensor visibility. It describes the tracker capabilities that matter to fleet managers, logistics teams, and operators using Plaspy to monitor assets and environmental conditions.

Exact feature availability and behavior can vary by device firmware, hardware revision, installation method, and manufacturer implementation. For that reason this page focuses on practical, public facing functions and how they are commonly used with Plaspy rather than device specific setup or private configuration details.

## Feature Overview

The KnightX 300 is a compact, rechargeable asset tracker built for non permanent installation and persistent visibility. It combines multi constellation GNSS positioning, low power cellular communications, BLE sensor support, internal and optional external temperature sensing, and offline buffered logging to maintain traces when coverage is intermittent.

- Real time location updates for persistent asset visibility and recovery.
- Environmental telemetry including internal temperature plus optional external probe and BLE sensor inputs for cold chain monitoring.
- Long life rechargeable battery and configurable reporting intervals to balance update rate and endurance.
- BLE 5.1 support for pairing wireless sensors and key fobs to extend monitoring without wiring.
- Buffered logging to store data when offline and forward logs when coverage returns.

## Core Features of TopFly - KnightX 300

- Multi constellation GNSS support for accurate positioning across GPS GLONASS BeiDou Galileo and QZSS.
- LTE Cat M1 with NB IoT and GSM fallback for broad coverage and low power wide area connectivity.
- BLE 5.1 radios for wireless sensor pairing and key fob integration.
- Internal temperature sensing plus support for an external temperature probe for cold chain use.
- Buffered logging and offline storage to preserve location and telemetry during coverage gaps.
- Rechargeable 6400 mAh battery with USB C charging for portable non permanent deployments.
- IP67 rated enclosure for protected outdoor use in exposed environments.
- FOTA support for firmware updates when provided by the manufacturer.

## How These Features Work with Plaspy

When deployed with Plaspy the KnightX 300 brings location and sensor streams into a single monitoring environment so teams can view position traces alerts and environmental data alongside their other assets. Plaspy accepts common device transports and can automatically detect the tracker protocol for ingestion.

- Real time tracking and frequent reporting appear on Plaspy maps and dashboards for operational visibility.
- Environmental telemetry and BLE sensor readings are ingested into Plaspy dashboards for cold chain and compliance views.
- Panic button and paired key fob events generate alerts and can be included in Plaspy notification workflows.
- Buffered logs are forwarded into Plaspy when connectivity returns preserving historical traces and event continuity.
- The device can be configured to send data to Plaspy endpoints over TCP or UDP and Plaspy will detect and process the tracker protocol.

## Typical Use Cases

- Temporary attachment to non powered equipment containers or trailers for location tracking without permanent installation.
- Cold chain monitoring where internal and external probe data must be recorded and reviewed.
- Parcel and unattended equipment protection using panic button events and BLE key fob alerts for theft mitigation.
- Distributed sensor telemetry using BLE temperature and humidity sensors paired to a portable tracker.
- Fleet operations that need occasional high frequency updates for short periods and long standby endurance otherwise.

## Feature Availability Notes

- Firmware and hardware revision differences can change available features such as supported BLE profiles or reporting frequency.
- Reporting intervals and battery endurance depend on configuration choices network conditions and the frequency of sensor polling.
- Regional device variants may differ in cellular band support and certification requirements.
- Optional accessories such as external temperature probes or specific BLE sensors are sold separately and require compatible firmware.
- Consult manufacturer release notes for the latest FOTA schedules and feature additions.

## Why Use Plaspy with These Features

Using the KnightX 300 with Plaspy centralizes location and environmental telemetry into a platform designed for fleet management and logistics oversight. Plaspy helps convert device streams into map visualizations alerts and historical traces that support asset recovery, cold chain compliance, and routine operations.

Learn more about deploying Plaspy with compatible trackers at https://www.plaspy.com. For the most current device specific feature details firmware behavior and manufacturer guidance verify information on the official TopFly website https://www.topflytech.com/

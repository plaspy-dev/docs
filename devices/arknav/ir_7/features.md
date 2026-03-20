---
slug: /arknav/ir_7/features
id: ir_7-features
sidebar_label: Features
title: ArkNav - IR-7 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the ArkNav IR-7 hybrid satellite and GSM tracker and how it integrates with Plaspy
keywords:
  - ArkNav IR-7
  - IR-7 features
  - ArkNav GPS tracker
  - IR-7 satellite tracker
  - hybrid satellite GSM tracker
  - IR-7 Plaspy
  - asset tracking remote areas
  - marine asset tracker
  - IP67 GPS tracker
  - FOTA COTA tracker
---

# ArkNav - IR-7 Features

This page describes the public feature context for using the ArkNav IR-7 tracker with Plaspy. It summarizes the IR-7 capabilities relevant to fleet and asset tracking, explains how those capabilities appear when the device reports into Plaspy, and highlights practical benefits for operations that need reliable location awareness in remote or challenging environments.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, installation method, and manufacturer implementation. Use this page as a high-level guide and refer to the manufacturer documentation for model specific technical details and the latest firmware and configuration options.

## Feature Overview

The ArkNav IR-7 is a hybrid satellite and GSM tracker built for continuous global tracking where GSM coverage may be intermittent. It combines multiple communications paths and a rugged hardware design to provide persistent reporting, event triggering, and remote configuration capability for assets operating in marine, desert, mountain, and other remote settings.

- Global satellite connectivity via an integrated Iridium satellite module for locations beyond GSM coverage.
- GSM GPRS support for routine reporting when cellular service is available, enabling cost efficient local communications.
- Hybrid switching between satellite and GSM to maintain continuous real-time location output.
- Rugged IP67 enclosure and wide vehicle power input range for reliable use in harsh environments.
- Multiple digital inputs and outputs to connect external sensors and signals for event-driven reporting.

## Core Features of ArkNav - IR-7

- Integrated Iridium satellite modem providing global reach independent of terrestrial networks.
- GSM GPRS communications for standard cellular reporting where available.
- Hybrid operation that enables switching between satellite and GSM based on signal availability.
- Four configurable inputs and four outputs for external sensor and control integration.
- IP67 rated enclosure for water and dust resistance suitable for exposed installations.
- ISO7637 level power input protection and a wide 9 to 48 V power input range for vehicle compatibility.
- Event triggering capabilities including time, distance, and angle triggers for efficient reporting.
- Support for message buffering, automatic saving, and resending to preserve data in temporary outages.

## How These Features Work with Plaspy

Plaspy receives and presents device data from the IR-7 so teams can monitor location, events, and device status in a single platform. Plaspy automatically detects many tracker protocols and can accept reporting from hybrid devices like the IR-7, helping to unify satellite and GSM telemetry into one operational view.

- Continuous location tracking in Plaspy whether the IR-7 reports via satellite or GSM, providing unified history and live position.
- Event visibility for inputs, power loss detection, and configured triggers shown in Plaspy logs and event timelines.
- Message buffering behavior reflected as delayed or batched telemetry when connectivity is restored, helping operators understand gaps.
- Device status indicators in Plaspy for online/offline, communication method, and recent activity to support operational decisions.
- Devices can be configured to report to Plaspy server endpoints and Plaspy will auto detect compatible protocols to integrate incoming data.

## Typical Use Cases

- Tracking vessels, equipment, or assets operating in offshore or maritime environments where cellular coverage is limited.
- Monitoring remote infrastructure and vehicles that routinely move through areas with poor GSM reception.
- Long distance logistics and cargo that cross regions with intermittent cellular service and require persistent position reports.
- Field operations and expeditions in desert or mountainous terrain that need reliable global location reporting.
- Assets that require event driven reporting such as main power loss detection or sensor-triggered messages.

## Feature Availability Notes

- Firmware versions and manufacturer configuration can enable or disable certain capabilities; check the device firmware release notes for specifics.
- Hardware revisions or regional variants may affect satellite certification, roaming partner support, or local cellular band compatibility.
- Installation method, antenna placement, and cabling impact satellite and GSM reception and should follow manufacturer installation guidance.
- Some features such as over the air updates and configuration require network access and may depend on subscription or service agreements.
- For the most current technical specifications and supported behaviors consult the official ArkNav product documentation.

## Why Use Plaspy with These Features

Using Plaspy with the ArkNav IR-7 brings hybrid satellite and GSM telemetry into a single tracking platform, simplifying monitoring across mixed connectivity environments. Plaspy provides consolidated history, event logs, and status visibility that help teams manage assets that move between cellular coverage and satellite-only areas without needing separate systems.

Learn more about how Plaspy can present hybrid tracking data and support operational oversight on https://www.plaspy.com. For the latest device specifications, firmware behavior, and manufacturer details verify information with ArkNav at https://www.arknavgps.com.tw/ as device features and implementations can change over time.

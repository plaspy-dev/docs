---
slug: /xexun/ddx14/features
id: ddx14-features
sidebar_label: Features
title: Xexun - DDX14 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Xexun DDX14 GPS ankle tracker and how it works with Plaspy for supervision and monitoring
keywords:
- Xexun DDX14 features
- Xexun DDX14 GPS tracker
- DDX14 tamper proof ankle bracelet
- DDX14 UWB proximity
- DDX14 Beidou GPS WiFi LBS
- DDX14 Plaspy compatibility
- DDX14 offline data reupload
- DDX14 tamper alarms
- DDX14 healthcare monitoring
- DDX14 community corrections
---

# Xexun - DDX14 Features

This page summarizes the public feature context for using the Xexun DDX14 tracker with Plaspy. It focuses on practical capabilities and how those capabilities map into Plaspy-managed supervision, monitoring, and case workflows. The DDX14 is a purpose built ankle bracelet that fuses GPS and Beidou with WiFi and LBS positioning, supports cellular transmission, and includes tamper protection and optional high precision proximity sensing when deployed with base stations.

Exact feature availability and behavior may vary by firmware version, hardware revision, regional variant, and how the device is installed and configured. Where the DDX14 description identifies optional modules or configurable behavior, availability depends on the specific unit and manufacturer implementation, so confirm device‑level details with official Xexun documentation and the device vendor when planning deployments.

## Feature Overview

The DDX14 provides continuous supervised tracking and tamper detection suitable for person‑centric monitoring programs. It combines multiple positioning sources and local safeguards to improve location reliability, provide timely alarms, and preserve data through connectivity interruptions.

- Hybrid positioning using GPS and Beidou with WiFi and LBS assistance for faster fixes and improved position stability.
- Conductive strap anti tamper loop and reinforced lock core to trigger immediate tamper alarms if the strap circuit is broken.
- Optional UWB module for high precision proximity and centimeter level ranging when paired with monitoring base stations.
- Blind zone local storage that preserves tracked data and automatically reuploads history when network service restores.
- 80 dB speaker for custom voice prompts on alarm activation and audible feedback for the wearer.
- Clip style wireless mobile power pack support for on body charging while the device is worn.

## Core Features of Xexun - DDX14

- GPS plus Beidou satellite positioning fused with WiFi and LBS to improve fix time and location reliability.
- Conductive strap tamper detection with immediate alarm reporting for anti tamper supervision.
- Optional UWB proximity module for centimeter level ranging when deployed with compatible base stations.
- Cellular connectivity across common domestic mobile networks for real time telemetry and alarms.
- Blind zone storage and automatic data retransmit to preserve event continuity during network outages.
- Built in speaker capable of playing custom voice messages on defined alarms.
- Clip style wireless mobile power pack support to enable convenient on body charging.
- Remote firmware upgrade capability to support device maintenance and updates.

## How These Features Work with Plaspy

Plaspy ingests the DDX14 telemetry and alarms so supervisors and caregivers can view live position, receive alerts, and review historical tracks. When the device is paired to Plaspy, the platform makes tamper events, proximity alerts, and reuploaded offline data visible inside case workflows and monitoring dashboards.

- Real time location updates and position history appear in Plaspy dashboards for oversight and playback.
- Tamper alarms triggered by the conductive strap are reported into Plaspy for immediate notification and case action.
- Optional UWB proximity events and over distance notifications are represented as proximity alarms when base station infrastructure is included.
- Blind zone storage reuploads are reflected as delayed track segments and event records in Plaspy so supervisors retain a complete timeline.
- Configurable geo fences, scheduled tracking intervals, and alert rules can be applied to DDX14 devices within Plaspy.
- Plaspy automatically detects supported tracker protocols and accepts device connections over standard TCP or UDP, simplifying device onboarding and management.

## Typical Use Cases

- Community corrections such as probation, parole, and monitored release where anti tamper alarms and geo fence enforcement are required.
- House arrest and controlled release programs that need continuous location tracking and proximity checks in specific indoor environments.
- Healthcare and vulnerable person monitoring that benefits from real time alerts, voice prompts, and historical location playback for caregivers.
- Institutional supervision and psychiatric monitoring using tamper proof hardware and persistent data reupload to maintain continuity.
- Quarantine or isolation compliance monitoring with configurable boundaries and over distance alerts.
- Special industry monitoring scenarios where a tamper resistant wearable and reliable offline storage are prioritized.

## Feature Availability Notes

- The UWB proximity module is optional and requires compatible monitoring base stations to deliver centimeter level ranging.
- Positioning performance and typical accuracy are environment dependent; hybrid GPS Beidou plus WiFi and LBS provide improved fixes but vary by installation and surroundings.
- Offline storage behavior, battery life, and reupload timing depend on firmware settings and reporting intervals configured on the device.
- Regional cellular support and network compatibility are determined by the specific DDX14 hardware variant and local mobile carriers.
- Tamper detection effectiveness depends on correct strap installation and device fitting as described by the manufacturer.
- Remote management features such as FOTA require device support and operator permissions to perform updates via the platform.

## Why Use Plaspy with These Features

Using the Xexun DDX14 together with Plaspy enables organizations to centralize supervision tasks, combine real time tracking with historical playback, and route actionable alarms into established case workflows. Plaspy’s device detection, alerting configuration, and archival capabilities help turn the DDX14 telemetry into operational insight for supervisors, caregivers, and compliance officers.

To learn more about Plaspy and how the platform can manage devices like the DDX14 visit https://www.plaspy.com. For the most current device specific technical details, firmware notes, and manufacturer guidance please verify information with Xexun at https://www.xexun.com/ since device features and firmware behavior can change over time.

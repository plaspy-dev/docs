---
slug: /dct/syrus_asset_tracker/protocol
id: syrus_asset_tracker-protocol
sidebar_label: Protocol
title: DCT - Syrus Asset Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the DCT Syrus Asset Tracker with Plaspy
keywords:
- DCT Syrus Asset Tracker
- Syrus Asset Tracker protocol
- DCT GPS tracker Plaspy
- Syrus communication protocol
- asset tracking protocol
- GPS tracker compatibility Plaspy
- fleet management tracking
- Syrus tracker telemetry
- Plaspy device protocol
- long term asset monitoring
---

# DCT - Syrus Asset Tracker Protocol

This page describes the public protocol context for using the DCT Syrus Asset Tracker with Plaspy. It focuses on how the tracker communicates telemetry to Plaspy in general terms without exposing private parsing logic or firmware internals. The Syrus Asset Tracker is a rugged, waterproof device built for long-term monitoring of non powered and exposed assets, available in 4G variants and a discontinued 3G model, and offered in a temperature capable variant for condition monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware revision, hardware variant, and manufacturer implementation, so device behavior such as reporting cadence, mode switching, and event generation may differ between units and firmware versions.

## Protocol Overview

The Syrus Asset Tracker protocol, as used with Plaspy, governs how the device reports location, motion events, and optional sensor data over cellular networks so Plaspy can present usable telemetry to operators. The protocol enables reliable reporting from low power, battery-operated assets and supports event driven reporting for unauthorized movement and other alarms.

- Transmits GPS location and event telemetry to a remote server so Plaspy can map and log asset activity.
- Carries device identification and basic status information so Plaspy can attribute reports to the correct asset record.
- Supports motion based events from the built in accelerometer to trigger immediate reporting when movement is detected.
- Conveys optional sensor values such as temperature from the 4G Temp Tracker variant for condition monitoring.
- Allows remote mode switching between low frequency locate modes and higher frequency track modes to balance battery life and reporting granularity.

## How Plaspy Detects the Protocol

Plaspy collects incoming telemetry on a shared, public endpoint and uses the information sent by the device to detect the tracker protocol and route data to the appropriate processors. In typical deployments, the device is configured to report into Plaspy and no manual protocol selection is required inside the Plaspy platform.

- Devices report to the Plaspy server endpoint d.plaspy.com or directly to the IP address 54.85.159.138.
- Plaspy listens on port 8888 for device connections and uses that same port for all supported devices.
- The Syrus Asset Tracker may be configured to use either UDP or TCP transport to reach the Plaspy endpoint.
- When a properly configured device reports to the shared endpoint, Plaspy automatically detects the tracker protocol and associates incoming telemetry with the correct device.
- Users typically only need to ensure the device has the correct APN and reporting server configured so Plaspy can accept the first reports.

## Transport and Connection Context

Connection context covers how the tracker sends data to Plaspy over the cellular network and what connection settings are commonly required for successful reporting. The Syrus Asset Tracker supports cellular reporting and will use the transport protocol selected on the device to deliver telemetry to Plaspy.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration choices.
- Plaspy accepts traffic addressed to d.plaspy.com or to the server IP 54.85.159.138 using port 8888.
- All devices in Plaspy use the same port for inbound telemetry, simplifying server configuration for fleet rollouts.
- Transport selection (UDP vs TCP) is controlled on the device side and depends on firmware capabilities and desired behavior for retransmission and session handling.
- Ensure cellular APN and outbound port rules allow traffic to the Plaspy endpoint so the device can reach the server successfully.

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior, event thresholds, and available fields; always check the device firmware level when validating behavior.
- Hardware variants matter: 3G models are discontinued while 4G and temperature capable variants remain in active use and may differ in available telemetry.
- Manufacturer configuration options may vary by region and SKU; some default settings may differ from unit to unit.
- Transport protocol selection (UDP vs TCP) can affect delivery characteristics; verify the device is set to a transport supported by your deployment and carrier network.
- Battery saving modes may reduce reporting frequency or suppress some telemetry when in locate mode versus track mode.
- Validate any operational assumptions against the official manufacturer documentation before large scale deployments.

## Why Protocol Understanding Matters

A clear, practical understanding of the tracker communication protocol reduces integration friction and helps ensure stable, predictable reporting into Plaspy. Knowing what the device sends and how it connects shortens setup time and improves troubleshooting when devices do not appear in the platform.

- Speeds initial provisioning by matching device reporting settings to the Plaspy endpoint and port.
- Helps diagnose common issues such as missing reports, incorrect device association, or unexpected telemetry cadence.
- Supports battery life optimization by understanding event driven reporting versus periodic tracking behavior.
- Improves alert tuning for unauthorized movement and other events based on how and when the device reports.
- Informs firmware update planning since behavior changes often accompany firmware revisions.

## Why Use Plaspy with This Protocol

Using the DCT Syrus Asset Tracker with Plaspy provides a practical solution for organizations that require long life, low maintenance monitoring of non powered and exposed assets. Plaspy receives location and event telemetry from these rugged devices, enabling mapping, historical reporting, and immediate alerts for unauthorized movement while supporting remote mode switching to preserve battery life during normal operation.

Plaspy accepts device reports at the public endpoint d.plaspy.com and the server IP 54.85.159.138 on port 8888, and the platform automatically detects the tracker protocol so typical users do not need to select a protocol inside Plaspy when the device is correctly configured. To learn more about Plaspy and how it can support Syrus Asset Tracker deployments visit https://www.plaspy.com. For the most current device specific protocol details, firmware information, and implementation guidance always verify with the manufacturer at https://www.digitalcomtech.com/ as protocol support and firmware behavior may change over time.

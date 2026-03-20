---
slug: /autofon/d/protocol
id: d-protocol
sidebar_label: Protocol
title: AutoFon - D-Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for AutoFon D Маяк integration with Plaspy real time tracking
keywords:
  - AutoFon D-Маяк protocol
  - AutoFon D-Маяк GPS protocol
  - AutoFon D-Маяк for Plaspy
  - AutoFon GPS tracker
  - D-Маяк tracking protocol
  - Plaspy device compatibility
  - GPRS GPS tracker protocol
  - covert tracker AutoFon
  - vehicle tracking AutoFon
  - D-Маяк telemetry integration
---

# AutoFon - D-Маяк Protocol

This page describes the public protocol context for using the AutoFon D‑Маяк tracker with Plaspy. It focuses on how the device reports position and event telemetry to the Plaspy monitoring platform and what to consider when configuring the tracker for reliable reporting and historical data recovery.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to send data to the Plaspy endpoint. Exact protocol behavior and available command sets can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a public and practical level while highlighting connection requirements and integration considerations.

## Protocol Overview

The D‑Маяк tracker communicates over cellular data with fallback reporting options and sends the information Plaspy needs for real time tracking, alerts, and historical playback. The protocol determines how the device identifies itself, reports location and sensor events, and handles queued data after temporary network outages.

- Enables secure delivery of GNSS position, accelerometer events, SOS presses, and auxiliary channel state to Plaspy.
- Supports buffered message delivery so stored packets are forwarded to Plaspy after connectivity restoration.
- Allows Plaspy to correlate incoming messages to a vehicle or asset using device identifiers supplied by the tracker.
- Provides event telemetry such as motion start, impacts, and alarm inputs for alerting and timeline reconstruction.
- Supports remote control actions where the tracker accepts commands from the platform when configured.

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint, so users normally do not need to select a protocol manually within the platform. Proper device configuration to point at the Plaspy endpoint is the key step for automatic identification and message processing.

- Plaspy listens for device traffic on the shared endpoint d.plaspy.com and on the public IP 54.85.159.138.
- Plaspy uses port 8888 for all supported devices so a single port is sufficient for D‑Маяк and other trackers.
- Devices can be configured to use UDP or TCP on port 8888 depending on device capabilities and installer preference.
- When the tracker reports to the Plaspy endpoint, the platform inspects the incoming messages and routes them to the appropriate handler for that device type.
- If messages are not arriving, verifying the device server settings and transport mode is the first troubleshooting step.

## Transport and Connection Context

Connection choice and correct endpoint configuration are essential for reliable telemetry. The D‑Маяк supports cellular GPRS reporting with SMS fallback where configured, and it can be set up to send data directly to Plaspy using standard TCP or UDP transports.

- Configure the device to report to d.plaspy.com or directly to 54.85.159.138 as the destination server.
- Use port 8888 for both TCP and UDP configurations since Plaspy handles both transports on the same port.
- Ensure the SIM plan and APN settings on the device allow GPRS data to reach the internet and the Plaspy endpoint.
- If SMS fallback is enabled, SMS can be used for some notifications or remote commands when GPRS is unavailable, per device capability.
- Network firewalls and carrier restrictions can block traffic, so allow outbound TCP or UDP to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior and available message fields; check firmware release notes when troubleshooting.
- Hardware revisions or regional variants may alter supported transports or default server addresses.
- Transport selection matters; some installations prefer UDP for lower overhead while others choose TCP for connection reliability.
- SMS reporting modes are device dependent and may not provide full telemetry compared to GPRS reporting.
- The device black box buffer improves reliability but validating buffer handling behavior against current firmware is recommended.
- Always verify expected behavior with the manufacturer documentation when deploying at scale.

## Why Protocol Understanding Matters

Understanding how the D‑Маяк communicates with Plaspy helps ensure correct setup, faster troubleshooting, and predictable long term operation of deployed trackers. Clear knowledge of connection requirements reduces integration friction and improves the quality of the telemetry Plaspy receives.

- Helps confirm the device is pointed at the correct Plaspy endpoint and transport mode for immediate data flow.
- Enables faster diagnosis when expected telemetry or alarms are not appearing in Plaspy.
- Supports informed choices about reporting intervals, power management, and buffered delivery for long life deployments.
- Clarifies which features depend on firmware or hardware variants so operators can plan capability coverage across a fleet.
- Reduces downtime by aligning device configuration with network and platform expectations.

## Why Use Plaspy with This Protocol

Pairing the AutoFon D‑Маяк with Plaspy gives organizations concise, event rich telemetry combined with platform features for mapping, alerts, and historical analysis. The device’s long autonomous life, buffered storage, accelerometer events, and auxiliary control channels make it well suited for covert installations, remote asset protection, and anti theft recovery workflows that feed directly into Plaspy dashboards and notification systems.

To learn more about Plaspy and how it handles device integrations and fleet telematics, please visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions for the AutoFon D‑Маяк, consult the manufacturer documentation at https://www.autofon.ru/ since protocol support and firmware behavior can change over time.

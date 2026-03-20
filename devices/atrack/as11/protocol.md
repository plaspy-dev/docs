---
slug: /atrack/as11/protocol
id: as11-protocol
sidebar_label: Protocol
title: ATrack - AS11 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the ATrack AS11 tracker with Plaspy including connection context and compatibility guidance
keywords:
  - ATrack AS11 protocol
  - AS11 GPS tracker
  - ATrack AS11 Plaspy
  - AS11 communication protocol
  - AS11 tracking protocol
  - ATrack GPS protocol
  - asset tracker AS11
  - AS11 telemetry
  - Plaspy compatible tracker
  - AS11 fleet tracking
---

# ATrack - AS11 Protocol

This page provides a public overview of the communication context for using the ATrack AS11 tracker with Plaspy. It explains how the device reports telemetry and events to Plaspy and summarizes the connection settings and practical compatibility considerations that matter for integration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact behavior for reporting intervals, supported message types and other firmware dependent features can vary by hardware revision, firmware version and manufacturer implementation, so always cross reference manufacturer documentation when you need device specific details.

## Protocol Overview

The AS11 uses its built in cellular and GNSS subsystems to generate telemetry and event messages that are sent to a backend service. The device protocol defines how the tracker packages location, sensor and input/output events so a server like Plaspy can interpret them for real time tracking, alerts and historical logs.

- Enables transmission of GNSS fixes and telemetry so Plaspy can display real time location and history.
- Carries digital input and output events and analog sensor values for state monitoring and integrations.
- Supports queued logging and retransmission so stored data uploads when connectivity is restored.
- Works over common transports supported by Plaspy so the device can reach the cloud endpoint reliably.
- Provides status and heartbeat messages used by Plaspy to monitor device health and connection continuity.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port for all supported devices and uses that entry point to automatically identify the tracker protocol. In most deployments a properly configured AS11 will begin reporting without manual protocol selection inside Plaspy.

- All devices report to the same Plaspy port which simplifies deployment and network configuration.
- Plaspy listens on the public endpoint d.plaspy.com and the corresponding server address 54.85.159.138 to accept device reports.
- The AS11 may be configured to use UDP or TCP when reporting to the Plaspy endpoint on port 8888 depending on device settings and network requirements.
- When an AS11 is pointed at the Plaspy endpoint and begins sending telemetry, Plaspy automatically detects the device protocol so manual mapping is typically not required.
- If a device is configured to send SMS or other out of band channels, those paths are separate from the TCP or UDP reporting flow and are handled according to carrier and device capabilities.

## Transport and Connection Context

Connection behavior for the AS11 is governed by the device transport options and the Plaspy server settings. The tracker supports TCP and UDP reporting as well as SMS where applicable, and Plaspy provides a single reachable endpoint to collect those messages.

- The AS11 may be configured to use UDP or TCP on port 8888 to send telemetry and events to Plaspy.
- Devices can be pointed to the domain d.plaspy.com or the server address 54.85.159.138 to reach Plaspy.
- Plaspy uses the same port for all supported trackers which reduces variation in firewall and network configuration.
- Queued logging on the AS11 allows intermittent networks to be bridged by storing messages until the device can reestablish a session to Plaspy.
- Choose TCP when you need ordered delivery and UDP when lower overhead and latency are preferred, subject to device and network constraints.

## Protocol Compatibility Notes

- Firmware version affects which message types and transport options are available; newer firmware can add or modify features.
- Hardware variants and regional cellular bands may change supported transports or network behavior across AS11 models.
- Manufacturer configuration defaults can differ from site to site; confirm APN and outbound transport settings before deployment.
- When using SMS or alternate reporting channels, behavior and cost depend on the cellular carrier and SIM configuration.
- Always validate that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 for Plaspy ingestion.
- If you rely on BLE sensors or external antennas, confirm the firmware supports sending those telemetry fields to the cloud.

## Why Protocol Understanding Matters

A practical understanding of the AS11 communication protocol helps ensure reliable setup, efficient troubleshooting and predictable behavior in field deployments with Plaspy. Knowing what the tracker will send and how it connects reduces integration time and improves long term operational stability.

- Helps map device telemetry fields to Plaspy dashboards and alerts so data appears correctly.
- Simplifies troubleshooting of connectivity issues by narrowing scope to APN, transport and endpoint configuration.
- Informs battery and reporting strategy because transport and retransmission behavior affect power use.
- Assists in planning for offline scenarios since queued logging and retransmit policies vary by firmware.
- Supports secure network configuration by ensuring only the required endpoints and ports are opened for tracker traffic.

## Why Use Plaspy with This Protocol

Using the AS11 with Plaspy provides a robust combination for long term asset tracking in harsh environments. The AS11 supplies the GNSS fixes, I/O events, analog telemetry and BLE sensor data that Plaspy consumes to provide location visibility, alerting and historical reporting for asset and fleet workflows. Its offline logging and queued upload behavior are particularly useful for assets with intermittent connectivity.

To learn more about Plaspy and how it works with devices like the AS11, visit https://www.plaspy.com. For the most current device specific protocol details, firmware release notes and configuration guidance, verify information on the manufacturer site https://www.atrack.com.tw/ as protocol support and firmware behavior can change over time.

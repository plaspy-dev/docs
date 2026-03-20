---
slug: /minifinder/watch/protocol
id: watch-protocol
sidebar_label: Protocol
title: MiniFinder - Watch Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for the MiniFinder Watch and how it communicates with Plaspy for reliable tracking and alerting
keywords:
  - MiniFinder Watch protocol
  - MiniFinder Watch GPS protocol
  - MiniFinder Watch protocol for Plaspy
  - MiniFinder Watch communication protocol
  - MiniFinder Watch tracking protocol
  - MiniFinder GPS tracker protocol
  - MiniFinder wearable protocol
  - Plaspy compatible MiniFinder Watch
  - MiniFinder Watch telemetry protocol
  - MiniFinder Watch integration
---

# MiniFinder - Watch Protocol

This page explains the public protocol context for using the MiniFinder Watch with the Plaspy platform. It focuses on how the device communicates in general terms so administrators, integrators, and technical users understand the connection and reporting relationship between the Watch and Plaspy without exposing firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and feature availability can vary with firmware versions, hardware revisions, and manufacturer implementation, so this page stays at a public, implementation independent level while describing the common elements relevant to successful integration.

## Protocol Overview

The device communication protocol is the set of rules the MiniFinder Watch follows to report location, telemetry, and events to a backend service such as Plaspy. For integration purposes, the protocol's role is to deliver usable data from the wearable to the cloud so Plaspy can present position, alerts, and status to caregivers and monitoring teams.

- Enables the Watch to transmit location points, SOS events, fall alerts, and health telemetry to the backend.
- Provides device identification and session context so Plaspy can associate incoming data with the correct account and device record.
- Carries event timing and basic sensor readings that Plaspy consumes for dashboards, alerting, and logging.
- Supports configuration commands and remote management where the manufacturer and platform allow remote updates and settings changes.
- Bridges multiple transport options so devices can deliver data reliably over the cellular or local links they support.

## How Plaspy Detects the Protocol

Plaspy is designed to receive incoming connections on a single shared endpoint and identify the tracker protocol automatically. When a correctly configured MiniFinder Watch reports to Plaspy, the platform associates the incoming stream with the appropriate device and processes the data without requiring manual protocol selection in most deployment scenarios.

- Plaspy listens on the shared server endpoint d.plaspy.com and the public IP 54.85.159.138 for incoming device traffic.
- All devices on Plaspy use the same port and Plaspy automatically detects the tracker protocol for supported models.
- If the Watch is configured to send data to the Plaspy endpoint, manual protocol selection inside Plaspy is typically not required.
- Device identity and common reporting fields enable Plaspy to map messages to device records and trigger alerts or telemetry ingestion.
- Administrators should ensure device reporting settings match Plaspy connection values so the automatic detection can operate correctly.

## Transport and Connection Context

Connection transport and addressing determine how the Watch reaches Plaspy for real time reporting. The MiniFinder Watch can use cellular links and local radios for positioning, but its backend reporting is generally sent over standard IP transports supported by the device firmware.

- The Watch may be configured to use either UDP or TCP on port 8888 depending on device support and carrier or firmware configuration.
- Devices may be pointed to the domain d.plaspy.com or directly to the server IP 54.85.159.138 as the Plaspy destination.
- Plaspy uses the same port 8888 for all supported devices to simplify deployment and device provisioning.
- Transport selection can affect delivery characteristics such as latency and retransmission behavior; choose the mode supported by the device and network.
- Ensure any carrier APN or firewall settings allow outbound traffic to the Plaspy endpoint and port to enable uninterrupted reporting.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, telemetry fields, or available features; confirm firmware level when validating behavior.
- Hardware variants and regional models may differ in supported transports or sensor sets, so verify device model and SKU against manufacturer guidance.
- Transport choice (UDP vs TCP) is determined by device firmware and configuration; check device settings to match Plaspy connection requirements.
- Plaspy’s automatic protocol detection reduces manual setup, but correct device addressing and port configuration remain essential.
- Manufacturer remote management and FOTA features can alter protocol behavior over time; coordinate updates when possible.
- For deployments in care facilities, consider indoor positioning options such as beacons or Wi Fi alongside GNSS to improve room level accuracy.

## Why Protocol Understanding Matters

Understanding how the Watch communicates with Plaspy helps ensure reliable delivery of location and alerting data, speeds troubleshooting, and supports long term maintainability across device fleets.

- Helps verify that devices are pointed to the correct Plaspy endpoint and port so data reaches the platform.
- Aids troubleshooting when devices do not appear in Plaspy by narrowing issues to transport, addressing, or firmware changes.
- Supports planning for firmware updates, carrier transitions, or hardware replacements that can affect reporting behavior.
- Ensures alerting and telemetry features such as SOS, fall detection, and health sensors are mapped correctly into Plaspy workflows.
- Improves operational reliability by aligning device configuration, network policies, and Plaspy ingest expectations.

## Why Use Plaspy with This Protocol

Using the MiniFinder Watch with Plaspy gives caregivers and organizations centralized visibility into real time location, health telemetry, and incident alerts coming from wearable devices. For environments that need continuous monitoring and fast incident response, integrating the Watch into Plaspy provides a single pane for event routing, historical review, and alert management without requiring bespoke backend setups.

To learn more about Plaspy and how the MiniFinder Watch can be used within the platform visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol and firmware information on the manufacturer website https://minifinder.se/.

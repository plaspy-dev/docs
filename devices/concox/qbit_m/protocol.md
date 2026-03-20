---
slug: /concox/qbit_m/protocol
id: qbit_m-protocol
sidebar_label: Protocol
title: Concox - Qbit M Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox Qbit M and how it communicates with Plaspy for LTE M GPS reporting and emergency alerts
keywords:
  - Concox Qbit M protocol
  - Qbit M GPS protocol
  - Concox Qbit M Plaspy
  - Qbit M communication protocol
  - Qbit M tracking protocol
  - Concox GPS tracker protocol
  - Plaspy device integration
  - LTE M GPS tracker
  - personal GPS tracker protocol
  - asset tracking protocol
---

# Concox - Qbit M Protocol

This page provides a public protocol context for using the Concox Qbit M tracker with the Plaspy platform. It describes how the tracker communicates in broad, non sensitive terms and explains the connection settings and transport choices that matter when pointing a Qbit M device at Plaspy for position reporting and event delivery.

The Qbit M is a compact LTE M tracker that reports GNSS positions and event data such as panic alerts and motion triggers. Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, region configuration, and manufacturer implementation. Always validate device specific details against the manufacturer documentation when planning deployments.

## Protocol Overview

The communication protocol used by the Qbit M enables the device to report location, status, and events to a backend endpoint so platforms like Plaspy can ingest and present that data. The public overview here focuses on the role of the protocol rather than implementation internals.

- Enables transmission of GNSS position reports and basic telemetry such as battery and movement state to a remote server.
- Carries event messages including panic button presses, low battery alerts, and geofence enter or exit notifications.
- Allows the tracker to identify itself so the platform can associate reports with a device record and apply user rules and alerts.
- Supports periodic or event driven reporting to balance real time visibility and battery life for personal tracking scenarios.
- Provides a consistent feed of location and event data that Plaspy can map, store, and forward into notification and monitoring workflows.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a single, shared endpoint and uses that connection to determine the device protocol automatically. In most cases a properly configured Qbit M will report to the Plaspy endpoint and require no manual protocol selection inside the platform.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct routing when needed.
- The port is 8888 which Plaspy uses as the shared ingest port for device traffic.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network environment.
- All devices in Plaspy use the same port which simplifies device configuration and firewall rules.
- Plaspy automatically detects the tracker protocol so users typically do not need to select a protocol in the platform when the device is correctly pointed at the endpoint.

## Transport and Connection Context

Connection transport defines how packets reach Plaspy but does not change the basic purpose of the protocol. Qbit M uses cellular LTE M connectivity to reach the internet and can be configured to send reports over either UDP or TCP to the Plaspy endpoint on the shared port.

- Devices may be pointed to the domain d.plaspy.com or directly to the IP 54.85.159.138.
- Both UDP and TCP transports are supported depending on firmware and network reliability considerations.
- Port 8888 is the common port used by Plaspy for all supported devices making routing and firewall configuration predictable.
- LTE M connectivity characteristics influence reporting frequency and power consumption profiles.
- For cellular deployments ensure APN and SIM details are set correctly so the tracker can reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change message timing, supported events, and available transports; verify firmware release notes for notable protocol changes.
- Hardware revisions or regional SKUs may alter supported radio bands or positioning assistance features that affect reporting behavior.
- Manufacturer configuration utilities or apps may expose transport selection options such as UDP versus TCP and server address settings.
- Event naming and parameter sets can differ between firmware branches; confirm the exact event list for your device before relying on specific triggers.
- For battery sensitive deployments, check available working modes and reporting intervals to balance accuracy and standby time.
- Always cross reference compatibility with the official Concox documentation to confirm device specific details.

## Why Protocol Understanding Matters

Understanding how the Qbit M communicates with Plaspy helps ensure reliable setup, effective troubleshooting, and predictable long term operation. A clear view of the protocol and connection context reduces configuration errors and supports smoother integration.

- Speeds up initial setup by clarifying what server address and transport to configure on the device.
- Helps troubleshoot connectivity issues by narrowing down transport, DNS, and routing causes.
- Enables better battery life planning by aligning reporting intervals and working modes with the desired visibility.
- Supports accurate mapping of events such as panic alerts and geofence triggers into Plaspy notifications and workflows.
- Reduces deployment risk by highlighting firmware or regional differences that may affect behavior.

## Why Use Plaspy with This Protocol

Using the Concox Qbit M with Plaspy provides centralized visibility for personal safety and small asset monitoring. Plaspy ingests the device position and event data and exposes that information through dashboards, historical playback, and configurable alerts so teams can respond quickly to emergencies and manage operational workflows.

Plaspy simplifies integration by using a single shared port and automatic protocol detection which reduces setup complexity for fleets of mixed devices. To learn more about how Plaspy can work with the Qbit M and other compatible trackers visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance always verify information on the manufacturer site https://www.iconcox.com/ as behavior and features may change with new releases.

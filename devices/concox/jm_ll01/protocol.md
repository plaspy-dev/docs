---
slug: /concox/jm_ll01/protocol
id: jm_ll01-protocol
sidebar_label: Protocol
title: Concox - JM-LL01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Concox JM-LL01 tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - Concox JM-LL01 protocol
  - Concox JM LL01 GPS protocol
  - JM-LL01 tracking protocol
  - JM-LL01 Plaspy compatibility
  - Concox GPS tracker communication
  - JM-LL01 asset tracker protocol
  - Plaspy device integration
  - Concox fleet tracking protocol
  - JM-LL01 telemetry protocol
  - Concox tracker Plaspy setup
---

# Concox - JM-LL01 Protocol

This page covers the public protocol context for using the Concox JM-LL01 tracker with Plaspy. It describes how the tracker communicates at a high level, the role of the reporting protocol in integration, and what to consider when configuring the device to report to Plaspy. The technical focus is intentionally general to avoid exposing sensitive parser or implementation details.

The JM-LL01 is a compact, rugged asset GNSS tracker built for long term low power deployments and is fully Plaspy compatible. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888 and the device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker reporting protocol is the set of conventions the JM-LL01 uses to send GNSS positions, telemetry, and event notifications to a remote platform like Plaspy. At a high level, the protocol ensures the device can identify itself, deliver time stamped location and sensor data, and support basic command or configuration exchanges as allowed by the device firmware.

- Allows the JM-LL01 to send periodic or event driven location updates to Plaspy for real time monitoring.
- Conveys device identity and basic telemetry so Plaspy can map inbound messages to the correct asset record.
- Transports sensor events such as tamper alerts, movement, and battery state so platform rules can act on them.
- Supports offline logging reconciliation so historical tracks stored on the device upload when connectivity returns.
- Operates over standard mobile networks used by the JM-LL01 to deliver data to the Plaspy endpoint.

## How Plaspy Detects the Protocol

Plaspy receives inbound device connections on a shared endpoint and port and uses automatic detection to determine how to interpret incoming messages from supported trackers. In most cases, a correctly configured JM-LL01 will begin reporting without manual protocol selection inside Plaspy.

- Devices should be pointed to the Plaspy endpoint d.plaspy.com or the server IP 54.85.159.138 for reporting.
- Plaspy listens on a single port for all devices and integrations to simplify device configuration and routing.
- The port used by Plaspy is 8888 and devices may be configured to use either UDP or TCP on that port.
- When a JM-LL01 is configured to report to the Plaspy endpoint, Plaspy automatically detects the tracker protocol so manual selection is typically unnecessary.
- If a device fails to appear in Plaspy, verify server address, transport selection, and that the device firmware is configured to report to the correct host and port.

## Transport and Connection Context

Connection and transport choices determine how the JM-LL01 sends data to Plaspy but do not define the entire application protocol. The tracker supports multiple cellular transports and can be configured to use either UDP or TCP to reach the Plaspy endpoint and port.

- The device may be configured to report to d.plaspy.com or to the numeric server address 54.85.159.138.
- Plaspy uses port 8888 for all devices, and the JM-LL01 can use UDP or TCP on port 8888 depending on device settings and network conditions.
- UDP is often used for low overhead periodic reporting while TCP may be selected for sessions that need reliable delivery depending on device firmware options.
- Network registration (LTE Cat M1, NB-IoT, or GSM fallback) and SIM/carrier settings affect connectivity but not the Plaspy endpoint configuration.
- Ensure APN and SIM settings are correct on the device so it can resolve and reach d.plaspy.com or the provided IP.

## Protocol Compatibility Notes

- Firmware versions can change message fields, reporting intervals, and which telemetry is included; always check device firmware release notes.
- Hardware revisions and regional variants (radio bands) do not necessarily change the reporting protocol but can affect connectivity behavior.
- Manufacturer configuration tools, SMS commands, or local BLE setup may be required to point the device to the Plaspy endpoint.
- Choose UDP or TCP based on device capabilities and operator network behavior; some networks handle small UDP datagrams differently.
- Confirm that any carrier or regional restrictions do not alter outbound connectivity to d.plaspy.com or to the server IP.
- Validate device support for features you need, such as offline logging uploads or tamper events, against manufacturer documentation.

## Why Protocol Understanding Matters

Understanding how the JM-LL01 communicates with Plaspy helps ensure reliable setup, faster troubleshooting, and predictable long term behavior for asset tracking deployments. Knowing the connection context and practical limitations reduces integration friction and improves operational uptime.

- Helps determine correct device configuration for APN, server address, and transport selection so data reaches Plaspy.
- Speeds troubleshooting when messages are missing by focusing on network, transport, and firmware differences rather than assuming platform issues.
- Enables planning for battery life and reporting strategies by aligning telemetry frequency with the device reporting model.
- Improves confidence when validating event handling such as tamper alerts, motion triggers, and offline log uploads.
- Supports administrators in documenting device inventory and firmware levels to manage compatibility across a fleet.

## Why Use Plaspy with This Protocol

Using the Concox JM-LL01 with Plaspy gives organizations unified visibility into asset location, telemetry, and events using a single platform. The JM-LL01’s long life battery, multi source GNSS, tamper detection, and offline logging complement Plaspy’s real time dashboards and alerting so teams can monitor distributed assets with fewer manual checks.

To learn more about Plaspy and how it works with devices like the JM-LL01 visit https://www.plaspy.com. For the latest, device specific protocol details, firmware notes, and hardware variants please verify the manufacturer documentation at https://www.iconcox.com/ as protocol support and firmware behavior can change over time.

---
slug: /autofon/e_maiak_ip/protocol
id: e_maiak_ip-protocol
sidebar_label: Protocol
title: AutoFon - E-Маяк IP Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for AutoFon E-Маяк IP showing how the tracker communicates with Plaspy and integration connection context
keywords:
  - AutoFon E-Маяк IP protocol
  - AutoFon E-Маяк IP GPS
  - AutoFon E-Маяк IP Plaspy
  - AutoFon E-Маяк IP communication
  - AutoFon GPS tracker protocol
  - E-Маяк IP tracking protocol
  - E-Маяк IP Plaspy compatibility
  - AutoFon tracker integration
  - vehicle tracking AutoFon
  - asset tracking E-Маяк IP
---

# AutoFon - E-Маяк IP Protocol

This page provides the public protocol context for using the AutoFon E‑Маяк IP tracker with Plaspy. It describes how the device reports position and alarms, the role of its reporting protocol when integrated with Plaspy, and practical connection considerations for reliable tracking and alerting. The focus is on non sensitive, high level protocol and transport information useful for setup and troubleshooting.

The E‑Маяк IP is compatible with Plaspy out of the box for SMS based updates and protocol messaging where GPRS is enabled. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol during communication. Exact protocol behavior can vary with firmware versions, hardware revisions, reporting intervals and manufacturer implementation, so this page emphasizes public, implementation neutral details and recommended validation steps.

## Protocol Overview

The tracker reporting protocol is the mechanism the E‑Маяк IP uses to identify itself, transmit position, send alarms and relay telemetry to a monitoring server such as Plaspy. For many deployments the device will send usable location and event data via SMS, while GPRS based protocol messages can be enabled to send data directly to a server endpoint that Plaspy provides.

- Enables the device to report GPS coordinates, time, and telemetry such as battery and temperature to Plaspy.
- Carries alarm and event notifications from the built in accelerometer, SOS button and external inputs for immediate processing.
- Supports both SMS forwarding and GPRS protocol messaging so Plaspy can ingest messages even without a manufacturer hosted server.
- Lets Plaspy associate incoming messages with a device identity so tracking, geofencing and alerts work reliably.
- Determines the cadence and content of heartbeat or liveness messages that Plaspy uses to monitor device health.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic at a single shared endpoint and port and applies automatic protocol detection so users rarely need to select a protocol manually in the platform. When the E‑Маяк IP is configured to send protocol messages to Plaspy, the same Plaspy endpoint handles the connection and the service identifies the tracker format to parse incoming data.

- Plaspy accepts device traffic at the domain d.plaspy.com and at the public server IP 54.85.159.138 for direct connections.
- The public Plaspy service listens on port 8888 and all devices supported by Plaspy use the same port for protocol messages.
- Devices may be configured to use UDP or TCP to report to Plaspy on port 8888 depending on device capabilities and chosen transport.
- Because Plaspy automatically detects the tracker protocol, a correctly configured device will typically be processed without manual protocol selection in the platform.
- If a device uses SMS forwarding, Plaspy can ingest the forwarded SMS messages or accept GPRS protocol messages when direct reporting is enabled.

## Transport and Connection Context

Connection context covers how the E‑Маяк IP reaches Plaspy rather than protocol internals. The device can report using SMS or send protocol messages over cellular data. When using GPRS protocol messaging, the device should be pointed to Plaspy’s endpoint and the same port used by all Plaspy devices.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138 depending on network setup and DNS resolution.
- The device may use either UDP or TCP on port 8888 for direct protocol reporting; Plaspy supports both transports on that port.
- All Plaspy supported devices use the same port which simplifies device configuration and server routing.
- SMS based reporting requires forwarding of SMS messages to a phone number or gateway that Plaspy can ingest; protocol messages use the direct GPRS path.
- Transport selection (SMS vs GPRS and UDP vs TCP) should be chosen based on coverage, battery life and reliability needs for the deployment.

## Protocol Compatibility Notes

- Firmware differences can change which messages the device sends, available fields, and supported command sets; always confirm the device firmware level when validating compatibility.
- Hardware revisions or variant models may alter supported transports or available telemetry channels such as additional inputs or peripheral control.
- Some features like remote audio monitoring and advanced accelerometer modes are available at the device level but their reporting format may vary by firmware.
- Choosing between SMS and GPRS reporting affects battery consumption and real time behavior; SMS is useful for ultra low power scenarios while GPRS supports richer protocol messaging.
- The device’s ability to point to a server endpoint depends on manufacturer settings; consult official configuration guides for exact parameter names and syntax.
- Validate compatibility and any special configuration steps against the official AutoFon documentation for the specific device revision.

## Why Protocol Understanding Matters

Knowing the public protocol context helps installers and administrators configure the E‑Маяк IP for reliable operation with Plaspy, diagnose why a device may not appear in the platform, and choose the transport that best fits operational constraints.

- Ensures the device is configured to report to the correct Plaspy endpoint and transport for immediate onboarding.
- Helps interpret device liveness and heartbeat behavior so alerts and dashboards reflect true device status.
- Supports troubleshooting of missing or malformed messages by narrowing the problem to transport, firmware or configuration differences.
- Informs power and reporting interval choices that balance battery life and real time visibility.
- Aids in planning for firmware updates or device replacements by understanding which protocol features are required for your workflows.

## Why Use Plaspy with This Protocol

Using the AutoFon E‑Маяк IP with Plaspy provides a practical combination for long term, low maintenance tracking where discreet installation, battery longevity, and robust alarm reporting are priorities. Plaspy can ingest SMS coordinate messages and GPRS protocol messages from the device, present real time location on maps, trigger alerts from accelerometer and SOS events, and surface telemetry for fleet and asset management.

To learn more about how Plaspy integrates with tracker protocols and to review platform features, visit https://www.plaspy.com. Protocol support, firmware behavior and device implementation details can change over time, so please verify the latest device specific information on the manufacturer website https://www.autofon.ru/.

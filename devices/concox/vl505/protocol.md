---
slug: /concox/vl505/protocol
id: vl505-protocol
sidebar_label: Protocol
title: Concox - VL505 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox VL505 GPS tracker and how it communicates with Plaspy
keywords:
  - Concox VL505 protocol
  - Concox VL505 GPS protocol
  - VL505 tracking protocol
  - VL505 Plaspy compatibility
  - Concox GPS tracker protocol
  - OBD II VL505 protocol
  - VL505 LTE Cat 1 tracker
  - fleet management VL505 protocol
  - VL505 communication protocol
  - Concox VL series protocol
---

# Concox - VL505 Protocol

This page provides a public, non sensitive overview of the communication context for the Concox VL505 GPS tracker when used with Plaspy. It explains how the device reports location and telemetry data to the Plaspy platform, and outlines the general protocol role without exposing proprietary parser details or private implementation specifics. The VL505 is an ultra compact OBD II 4G tracker designed for easy installation and continuous reporting, and this document focuses on how that reporting fits into Plaspy's ingest and connectivity model.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the Plaspy endpoint. Public Plaspy connection endpoints include the domain d.plaspy.com and the server IP 54.85.159.138 using port 8888. Devices may be configured to use either UDP or TCP on port 8888. Plaspy uses the same port for all devices and will automatically detect the tracker protocol, while exact behavior and message contents can vary by VL505 firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The VL505 reporting protocol is the mechanism by which the device identifies itself, delivers GNSS positions, movement events, and telemetry to cloud services such as Plaspy. In practical terms, the protocol defines what data the device sends and how it signals events like ignition, geofence triggers, or motion alerts. This public overview focuses on the role of that communication in everyday setup and operation rather than on low level frame formats.

- Enables the VL505 to transmit multi source GNSS positions and telemetry to Plaspy for real time tracking and history.
- Carries device events such as geofence entry or exit, vibration alerts, speeding events, power disconnect, and driving behavior notifications.
- Allows OBD II derived telemetry to be reported where vehicle and device support PIDs, enriching Plaspy dashboards.
- Supports remote configuration channels used by manufacturers such as SMS or cloud provisioning platforms that can coexist with Plaspy reporting.
- Provides the basis for reliable replay and analytics inside Plaspy when temporary connectivity interruptions are resolved.

## How Plaspy Detects the Protocol

Plaspy is designed to accept device traffic on a shared endpoint and determine the reporting protocol automatically when a device sends data to the platform. For most users this means minimal manual configuration inside Plaspy as long as the device is pointed at the correct Plaspy endpoint and transport.

- Devices should be set to report to d.plaspy.com or directly to 54.85.159.138 so Plaspy receives the inbound reports.
- Plaspy listens on port 8888 for tracker data and uses the same port for all supported devices.
- Devices can be configured to use UDP or TCP on port 8888 depending on device capability and network requirements.
- When the VL505 sends its first reports to the Plaspy endpoint, Plaspy will automatically detect the tracker protocol and begin ingesting position and event data.
- Typically there is no need to manually choose a protocol in Plaspy if the tracker is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

Transport selection and correct endpoint configuration are the fundamental connection concerns when integrating VL505 units with Plaspy. The device supports LTE Cat 1 cellular connectivity and can be provisioned to send data over either UDP or TCP on port 8888 to Plaspy's public endpoints.

- VL505 devices can point to the domain d.plaspy.com or to the IP 54.85.159.138 to send reports to Plaspy.
- Both UDP and TCP transports are supported on port 8888; choose the transport that fits network conditions and device configuration.
- All Plaspy devices use the same port number 8888, simplifying firewall and network rules for large deployments.
- Ensure device SIM, APN, and provisioning are configured so the tracker has internet access before attempting Plaspy integration.
- Regional VL505 variants such as VL505-NA and VL505-EU should be provisioned with matching carrier and APN settings for reliable cellular connectivity.

## Protocol Compatibility Notes

- Firmware version differences can change which events or telemetry fields the VL505 reports; validate behavior against the installed firmware.
- Hardware revisions and regional model variants may alter supported GNSS sources, band support, or peripheral sensors.
- The VL505 supports remote configuration via SMS and cloud provisioning platforms, which can affect how it reports to Plaspy if those services are used.
- Transport choice (UDP vs TCP) can impact message delivery characteristics; test both if you experience intermittent reporting issues.
- Confirm APN, eSIM provisioning, and carrier restrictions when deploying at scale to prevent data gaps.
- Always cross reference any protocol assumptions with the official manufacturer documentation for model specific behavior.

## Why Protocol Understanding Matters

Understanding how the VL505 communicates with Plaspy helps ensure reliable setup, effective troubleshooting, and consistent long term operation. Knowing the role of transport, endpoints, and firmware variation reduces integration time and improves operational confidence for fleet managers and technicians.

- Speeds initial setup by informing correct endpoint, transport, and SIM provisioning choices.
- Makes troubleshooting easier when locations, events, or OBD II parameters do not appear in Plaspy.
- Helps plan network and firewall rules since Plaspy uses a single shared port for all devices.
- Reduces data loss risk by clarifying how temporary edge logging and retransmit behavior intersect with Plaspy ingestion.
- Supports better lifecycle management by tracking firmware differences that affect reported fields and events.

## Why Use Plaspy with This Protocol

Using the Concox VL505 with Plaspy provides a practical path for organizations to collect real time location, event alerts, and vehicle telemetry across private and commercial fleets. The VL505’s compact OBD II form factor, multi source GNSS positioning, and onboard sensors make it suitable for dispatching, anti theft monitoring, driving behavior analysis, and usage based reporting when paired with Plaspy’s ingest and visualization features.

Plaspy’s unified endpoint model simplifies large scale rollouts because all devices use the same port and Plaspy automatically detects the tracker protocol once the VL505 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888. To learn more about how Plaspy can work with your fleet, visit https://www.plaspy.com. For the most current device level protocol details, firmware notes, and model specific behavior verify the official manufacturer documentation at https://www.iconcox.com/.

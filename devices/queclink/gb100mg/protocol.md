---
slug: /queclink/gb100mg/protocol
id: gb100mg-protocol
sidebar_label: Protocol
title: QuecLink - GB100MG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for QuecLink GB100MG and how it communicates with Plaspy for reliable UBI and fleet telematics integration
keywords:
  - QuecLink GB100MG protocol
  - GB100MG GPS protocol
  - QuecLink GB100MG Plaspy compatibility
  - GB100MG communication protocol
  - GB100MG tracking protocol
  - QuecLink GPS tracker protocol
  - fleet telematics GB100MG
  - UBI tracker GB100MG
  - QuecLink Plaspy integration
  - GB100MG telemetry protocol
---

# QuecLink - GB100MG Protocol

This page provides a public, protocol-oriented reference for using the QuecLink GB100MG with the Plaspy platform. It summarizes the communication context and practical considerations for integration without exposing private parser internals. The GB100MG is a compact, battery-mounted GPS tracker built for usage based insurance and fleet telematics with features such as LTE Cat M1 and NB1 with 2G fallback, high-rate crash telemetry, BLE connectivity, an IP67 enclosure, and a large message buffer for reliable reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a unit is configured to report to the Plaspy endpoint. Plaspy’s public endpoint is d.plaspy.com and the public server IP is 54.85.159.138 on port 8888. Devices may be configured to use UDP or TCP on port 8888 and all devices in Plaspy use the same port. Exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation, so this page focuses on safe, operational guidance for successful integration.

## Protocol Overview

The tracker reporting protocol enables the GB100MG to deliver location, status, crash telemetry, and accessory sensor data to a cloud platform such as Plaspy. The protocol defines how the device identifies itself, how periodic and event-driven messages are sent, and how buffered messages are delivered after connectivity is restored.

- Device identification and registration messages allow Plaspy to recognize an individual GB100MG and associate it with an account.
- Periodic location reports and status messages provide the positional data and operational state Plaspy uses for live tracking and historical playback.
- Event and alarm messages carry crash telemetry, ignition and movement events, and BLE sensor updates that drive alerts and workflows.
- Buffered reporting ensures messages collected during coverage gaps are forwarded when the device regains connectivity.
- Transport options such as TCP, UDP, and SMS (where supported by the device and operator) provide resilient delivery paths suited to different coverage and network constraints.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming connections on a shared endpoint and automatically determine the tracker protocol for supported devices. In most deployments the user only needs to configure the device to report to Plaspy; manual protocol selection within Plaspy is usually unnecessary.

- Plaspy’s public server endpoint is d.plaspy.com and the public server IP is 54.85.159.138 on port 8888.
- The device may be configured to use either UDP or TCP on port 8888; Plaspy accepts both transports.
- Plaspy automatically detects the tracker protocol when a properly configured device reports to the endpoint.
- For devices that support SMS reporting, coordinate SMS gateway settings with Plaspy support if SMS ingestion is required.
- Ensure each device’s identity settings are correctly populated so Plaspy can match incoming messages to the right tracker record.

## Transport and Connection Context

Connection and transport choices affect how the GB100MG reaches Plaspy and how resilient the reporting will be under different network conditions. The GB100MG supports multiple transport modes so operators can choose the most appropriate path for coverage and reliability.

- The GB100MG can report over TCP or UDP on port 8888 depending on device configuration and network environment.
- Devices may be pointed at the Plaspy endpoint by domain d.plaspy.com or directly to the public IP 54.85.159.138.
- Plaspy uses the same port, 8888, for all supported devices to simplify firewall and NAT configuration.
- When packet data is constrained, the device can use SMS as an alternate reporting path where supported by the operator and device configuration.
- When deploying at scale, allow outbound TCP and UDP traffic to the Plaspy endpoint from vehicle gateways and carrier APNs to ensure reliable delivery.

## Protocol Compatibility Notes

- Firmware revisions can change message content, available events, and default transport settings; always verify the device firmware level when assessing compatibility.
- Hardware revisions or SKUs may have different sensor capabilities or reporting features that affect which messages are produced.
- Transport selection (TCP, UDP, SMS) impacts delivery semantics and should be chosen to match network reliability and operator policies.
- The GB100MG was announced as phased out; Queclink recommends the GB130MG as a current replacement for new deployments.
- Validate behavior such as crash telemetry sampling, BLE accessory support, and buffer limits against the device documentation for the specific firmware revision.
- Confirm any required device identity or account configuration values with your provisioning workflow so Plaspy can correctly map incoming messages.

## Why Protocol Understanding Matters

Understanding how the GB100MG communicates helps ensure reliable setup, correct parsing of telemetry in Plaspy, and efficient troubleshooting if messages are missing or malformed. Knowing the transport and message flow reduces deployment friction and improves long-term operational stability.

- Proper endpoint and transport configuration ensures the device reaches d.plaspy.com or 54.85.159.138 on port 8888 and that Plaspy can ingest messages.
- Awareness of firmware differences helps diagnose why a particular event or field may be present or absent in device messages.
- Understanding buffering and retransmission behavior guides expectations during coverage interruptions and post-event uploads.
- Knowing which events the device can generate (crash traces, ignition, tow alarms, BLE readings) enables correct mapping to Plaspy rules and alerts.
- Coordinating with carrier and firewall settings prevents common connectivity issues such as blocked outbound ports or NAT timeouts.

## Why Use Plaspy with This Protocol

Using Plaspy with the GB100MG brings the device telemetry, crash traces, and BLE sensor data into a unified cloud platform for live visibility, rules based alerts, and historical analytics. This combination is well suited to usage based insurance programs, fleet safety and operations, and anti theft workflows where high fidelity crash data and reliable location reporting matter.

Plaspy’s automatic protocol detection and single shared endpoint simplify device onboarding and reduce the need for protocol-specific configuration in the cloud. To learn more about Plaspy and how it integrates with devices like the GB100MG, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol documentation and firmware information from the manufacturer at https://www.queclink.com/.

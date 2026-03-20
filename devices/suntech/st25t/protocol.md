---
slug: /suntech/st25t/protocol
id: st25t-protocol
sidebar_label: Protocol
title: Suntech - ST25T Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for using the Suntech ST25T with Plaspy for telemetry forwarding and gateway integration
keywords:
  - Suntech ST25T protocol
  - ST25T Plaspy compatibility
  - Suntech telematics interface
  - vehicle telemetry ST25T
  - ST25T gateway integration
  - Suntech GPS protocol
  - Plaspy device integration
  - fleet tracking ST25T
  - J1939 J1708 integration
  - fuel sensor RS485 LLS
---

# Suntech - ST25T Protocol

This page covers the public protocol context for using the Suntech ST25T with Plaspy. The ST25T is a compact vehicle telematics interface module designed to forward vehicle bus and sensor data to Plaspy enabled gateways such as the ST4305 and ST8300. It is intended to enrich gateway telemetry by supplying CAN J1939 and J1708 messages, RS232 and RS485 sensor data, ADC inputs, and optional Bluetooth signals rather than acting as a standalone GNSS tracker.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the Plaspy endpoint. Devices compatible with Plaspy may be configured to send data to d.plaspy.com or to the IP address 54.85.159.138 on port 8888 using UDP or TCP. Exact protocol behavior and message content can vary by firmware version, hardware revision, and manufacturer implementation, so it is important to validate device settings against current manufacturer documentation.

## Protocol Overview

The ST25T functions as a telemetry and sensor interface that forwards vehicle signals to a Plaspy gateway. The device supplies the gateway with vehicle bus and sensor readings so that Plaspy can present unified vehicle state, alerts, and historical reporting in fleet dashboards. The protocol in this context refers to the method and message formats used by the ST25T and gateway to relay telemetry into Plaspy.

- Enables forwarding of vehicle bus data and sensor readings from the ST25T to a Plaspy enabled gateway for ingestion into the Plaspy platform.
- Carries unique device and telemetry identifiers so Plaspy can associate incoming streams with a specific vehicle or interface module.
- Conveys event and status signals such as ignition, door or alarm inputs and fuel sensor readings for real time alerts and reporting.
- Supports local configuration and accessory pairing via optional Bluetooth while serial and ADC channels provide deterministic sensor interfaces.
- Allows Plaspy to combine GNSS location from the gateway with vehicle telemetry from the ST25T for complete fleet context.

## How Plaspy Detects the Protocol

Plaspy detects compatible devices by observing incoming connections at the shared Plaspy endpoint. When a correctly configured device or gateway reports to the Plaspy server, the backend automatically recognizes the device protocol and begins ingesting its telemetry without requiring manual protocol selection in most deployment scenarios.

- Devices should be configured to send data to d.plaspy.com or to the server IP 54.85.159.138 on port 8888.
- The ST25T forwards telemetry to a Plaspy enabled gateway which in turn reports to the Plaspy endpoint for automatic detection.
- Plaspy accepts both UDP and TCP traffic on the same port so device transport can be chosen based on device capabilities and network requirements.
- In typical setups the user does not need to pick a protocol inside Plaspy if the device or gateway is correctly pointed at the Plaspy endpoint.
- Automatic detection helps speed onboarding but successful detection depends on device configuration and firmware behavior.

## Transport and Connection Context

Connection and transport choices determine how the ST25T and its paired gateway communicate with Plaspy. The platform uses a single, consistent port for all supported devices which simplifies device configuration and firewall rules. Devices and gateways can be configured for UDP or TCP depending on hardware support and network requirements.

- Plaspy listens on port 8888 for all supported devices and gateways.
- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Both UDP and TCP are supported on port 8888 depending on device and gateway configuration.
- Using the shared Plaspy endpoint and port simplifies large scale rollouts and reduces per device setup differences.
- Choose the transport mode that best matches cellular modem behavior and network reliability for your deployment.

## Protocol Compatibility Notes

- Firmware variations can change message timing, optional fields, or supported inputs so always confirm behavior for your firmware revision.
- Hardware revisions and optional modules such as Bluetooth or additional ADC channels may alter the set of telemetry fields forwarded to the gateway.
- Transport selection between UDP and TCP can affect delivery characteristics and should match the gateway and network design.
- Manufacturer side configuration menus or provisioning tools may present different options across firmware revisions.
- The ST25T acts as an interface module and relies on the paired gateway for GNSS and cellular connectivity; verify gateway compatibility for Plaspy integration.
- Validate RS485 LLS fuel sensor wiring and serial line configurations against the ST25T datasheet and gateway documentation before deployment.
- Confirm any region specific requirements or carrier settings that could impact connectivity to the Plaspy endpoint.

## Why Protocol Understanding Matters

Understanding how the ST25T and its paired gateway communicate with Plaspy reduces setup time, improves troubleshooting, and helps maintain long term reliability. Knowing the role of transport, device identifiers, and firmware variants allows integrators and fleet operators to make informed decisions about configuration and maintenance.

- Ensures devices are pointed to d.plaspy.com or 54.85.159.138 and use port 8888 so Plaspy can receive telemetry.
- Helps choose between UDP and TCP based on network reliability and gateway modem behavior.
- Aids in diagnosing missing telemetry by checking firmware versions and transport settings.
- Supports correct mapping of vehicle bus signals and sensor channels to fields shown in Plaspy.
- Reduces time to resolve integration issues by aligning device settings with Plaspy connection expectations.

## Why Use Plaspy with This Protocol

Using the ST25T as part of a Plaspy compatible solution is a practical choice for fleets that require robust vehicle bus integration, fuel monitoring, and support for legacy serial devices. The ST25T focuses on telemetry aggregation and reliable forwarding to a gateway, enabling Plaspy to provide unified tracking, alerts, and reporting when GNSS and cellular connectivity are provided by a compatible gateway.

To learn more about Plaspy and how it works with interface modules like the ST25T visit https://www.plaspy.com. Please verify the latest device specific protocol behavior, firmware notes, and implementation details with the manufacturer at http://www.suntechint.com/ as protocol support and firmware behavior can change over time.

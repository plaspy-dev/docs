---
slug: /navtelekom/signal_s_2654/protocol
id: signal_s_2654-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2654 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the Navtelekom СИГНАЛ S-2654 tracker with Plaspy real time tracking
keywords:
  - Navtelekom СИГНАЛ S-2654 protocol
  - Navtelekom S-2654 GPS protocol
  - SIGNAL S-2654 Plaspy compatibility
  - S-2654 GLONASS tracker protocol
  - Navtelekom tracking protocol
  - vehicle tracker communication protocol
  - fleet telematics Plaspy compatibility
  - S-2654 telemetry integration
  - Navtelekom MODBUS CAN RS485 protocol
  - discontinued Navtelekom tracker documentation
---

# Navtelekom - СИГНАЛ S-2654 Protocol

This page describes the public protocol context for using the Navtelekom СИГНАЛ S-2654 vehicle tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in non sensitive, implementation neutral terms so integrators and fleet operators can understand connection expectations and practical deployment considerations.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports correctly. Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888. The device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port, and exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol used by the S-2654 conveys GNSS position reports, cellular telemetry, and digital or serial I O state to a remote platform. For Plaspy, the protocol is the mechanism that allows the tracker to identify itself, report location and sensor data, and let the server correlate those messages with the correct asset record.

- Transports GNSS fixes and timestamped telemetry from the device to a remote server for real time tracking.
- Carries status information such as ignition, inputs, outputs, and alarm events that map to Plaspy alerts and rules.
- Encodes serial and CAN derived telemetry so fuel, engine or sensor data can be processed by the platform.
- Lets the server associate messages with the device identity so reporting, history and reconstructions work correctly.
- Works alongside local logging on microSD to ensure data can be reconciled after temporary connectivity loss.

## How Plaspy Detects the Protocol

Plaspy automatically determines the correct tracker protocol when a device is configured to send data to the Plaspy endpoint. In most cases no manual protocol selection is needed inside Plaspy if the S-2654 is pointing to the platform and using a supported transport.

- Plaspy accepts device connections on the shared endpoint d.plaspy.com and on the numeric endpoint 54.85.159.138.
- The platform listens on port 8888 for incoming device traffic and uses a consistent port for all supported devices.
- Plaspy automatically detects the tracker protocol when it receives valid reports from the device.
- Users typically configure the S-2654 to report to d.plaspy.com or to 54.85.159.138 and to use UDP or TCP on port 8888.
- When a device uses the expected connection settings, Plaspy matches device identity to account records and begins ingesting location and telemetry.

## Transport and Connection Context

Connection context describes how the S-2654 reaches the Plaspy service and which network options are commonly used. These are deployment level details useful for firewall rules, APN configuration and device setup.

- The S-2654 may be configured to send data over UDP or TCP on port 8888 depending on device settings and network conditions.
- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for systems that prefer a numeric endpoint.
- The port is 8888 and all devices in Plaspy use the same port for device reporting.
- Dual SIM operation on the S-2654 helps maintain an active uplink to Plaspy in areas with variable cellular coverage.
- Configure device APN and allowed outbound ports so the tracker can reach d.plaspy.com or 54.85.159.138 over the selected transport.

## Protocol Compatibility Notes

- Firmware revisions can change the exact set of messages and fields a device sends; verify the firmware level when validating compatibility.
- Hardware revisions or accessory options such as CAN or serial modules can affect which telemetry streams are available to Plaspy.
- The S-2654 is listed as discontinued archived by the manufacturer; archived models may still be compatible but require checking available documentation and firmware history.
- Transport choice matters some devices prefer UDP while others can use TCP; confirm the S-2654 is configured to use UDP or TCP on port 8888 as required.
- Manufacturer configuration tools such as NTC Configurator and remote management via DRC help ensure the device is pointed correctly at the Plaspy endpoint.
- Always validate device identity and initial messages after first connection to ensure Plaspy detects the protocol and begins ingesting data.

## Why Protocol Understanding Matters

Understanding how the tracker communicates with Plaspy helps with a smoother setup, faster troubleshooting, and more reliable long term operation. Clear protocol expectations reduce integration time and make it easier to maintain fleet visibility.

- Ensures correct APN, SIM and outbound port configuration so the device can reach d.plaspy.com or 54.85.159.138.
- Helps diagnose connectivity issues by confirming whether the device is using UDP or TCP on port 8888.
- Guides firmware selection and configuration when different releases change message content or supported telemetry.
- Supports planning for telemetry mapping so inputs, CAN data and MODBUS values are interpreted by Plaspy as intended.
- Aids in reconciliation workflows that combine local microSD logs with server side history when coverage is intermittent.

## Why Use Plaspy with This Protocol

Using the Navtelekom СИГНАЛ S-2654 with Plaspy provides a practical path to collect GLONASS position fixes, vehicle inputs and industrial telemetry into a single fleet management workflow. The device hardware and I O options make it well suited for fleets that need reliable cellular redundancy, serial and CAN integration, and local logging to complement server based tracking.

To learn more about Plaspy and how it ingests data from devices like the S-2654 visit https://www.plaspy.com. For the latest device specific protocol documentation, firmware notes and configuration tools consult the manufacturer at https://www.navtelecom.ru/. Protocol support, firmware behavior, and device implementation details can change over time so verify current information with the manufacturer documentation.

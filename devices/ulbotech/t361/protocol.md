---
slug: /ulbotech/t361/protocol
id: t361-protocol
sidebar_label: Protocol
title: Ulbotech - T361 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Ulbotech T361 with Plaspy for fleet and vehicle telemetry
keywords:
  - Ulbotech T361
  - Ulbotech T361 protocol
  - Ulbotech GPS tracker
  - T361 protocol
  - Plaspy compatibility
  - OBD II tracker protocol
  - vehicle tracking protocol
  - GPS tracker communication
  - fleet tracking T361
  - Ulbotech telemetry
---

# Ulbotech - T361 Protocol

This page describes the public protocol context for integrating the Ulbotech T361 OBD II GPS tracker with the Plaspy platform. It focuses on how the device communicates with Plaspy in general terms, the connection options you will commonly use, and practical notes that help with setup and troubleshooting. The overview here is intended to be non sensitive and complementary to official manufacturer documentation.

The T361 is a plug and play OBD II tracker that delivers GNSS position, OBD and CAN telemetry, accelerometer events, and remote control outputs over GPRS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware, hardware revision, and manufacturer implementation. Always consult Ulbotech documentation for firmware specific details.

## Protocol Overview

The tracker communication protocol defines how the T361 identifies itself, reports GPS fixes and vehicle telemetry, and receives commands or configuration when supported. For users integrating with Plaspy, the important aspects are that the device can send location, OBD metrics, and event notifications over a cellular link and that Plaspy ingests and normalizes those streams for display and rules.

- The protocol carries periodic location updates and event-driven messages for live tracking and history playback.
- Vehicle telemetry such as OBD PIDs and SAE J1939 data is reported as device messages that Plaspy maps to usable fields.
- Device identity and basic status are included so Plaspy can associate incoming messages with the correct device record.
- Diagnostic and sensor events such as harsh driving, ignition state, and disconnects are part of the message stream used by alerts and rules.
- The protocol also supports remote management features like firmware update triggers and configuration delivery when available.

## How Plaspy Detects the Protocol

Plaspy is designed to accept connections from many tracker models using a common network endpoint and to automatically detect the incoming tracker protocol. In most cases a correctly configured T361 that reports to the Plaspy endpoint will not require manual protocol selection inside the platform.

- Plaspy listens on a shared endpoint that all supported devices use, reducing configuration overhead.
- The public Plaspy server domain is d.plaspy.com which resolves to the platform endpoint.
- Plaspy server IP is 54.85.159.138 for vendors or environments that prefer numeric addressing.
- Plaspy uses port 8888 for device connections and all devices supported by Plaspy use the same port.
- Plaspy automatically detects the tracker protocol so users typically do not need to pick a protocol manually if the device reports to the Plaspy endpoint.

## Transport and Connection Context

Connection behavior for the T361 depends on device configuration and network conditions. The tracker can be configured to use either UDP or TCP transport when reporting to Plaspy, and Plaspy accepts both transports on the same port for convenience and compatibility.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- Plaspy accepts device reports on port 8888 for all supported trackers to simplify provisioning.
- Devices can be pointed at the Plaspy server domain d.plaspy.com or directly to 54.85.159.138 when required by network setups.
- Using DNS for the domain name generally allows transparent failover if backend routing changes.
- Ensure APN and GPRS connectivity on the device are correct so the tracker can reach the Plaspy endpoint over the cellular network.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change message availability and the exact telemetry the device reports. Check firmware notes for feature differences.
- Manufacturer side configuration options or regional variants can affect which OBD PIDs or CAN frames are exposed to the platform.
- Transport choice (UDP versus TCP) can affect delivery characteristics; select the transport that matches your network reliability and device configuration guidance.
- Some features such as remote firmware updates and advanced ECU mappings require both device firmware support and correct server side provisioning.
- Verify that the device SIM and mobile network settings allow outbound connections to d.plaspy.com or the numeric IP if you use direct addressing.
- When deploying at scale, validate a small set of devices first to confirm protocol and transport behavior before mass rollout.

## Why Protocol Understanding Matters

Understanding how the T361 communicates helps ensure reliable onboarding, correct telemetry ingestion, and faster troubleshooting when devices do not behave as expected. Clear knowledge of the connection context, transport, and what the device reports lets you align device configuration with Plaspy workflows and operational needs.

- Faster detection of misconfigured APN or reporting endpoints that prevent device data from reaching Plaspy.
- More accurate mapping of OBD and CAN telemetry to Plaspy fields for reporting and rules.
- Better planning for transport selection and network behavior in areas with variable cellular coverage.
- Clearer expectations about which events and diagnostics will be present based on firmware and ECU support.
- Easier collaboration with Ulbotech support when device behavior differs from the platform ingestion patterns.

## Why Use Plaspy with This Protocol

The Ulbotech T361 delivers vehicle level telemetry and easy OBD II installation that complements Plaspy’s fleet management, alerting, and reporting capabilities. Integrating the T361 with Plaspy gives organizations a way to combine real time location with engine and driver event data to improve operations, safety, and asset protection.

Plaspy accepts connections to d.plaspy.com or 54.85.159.138 on port 8888 using either UDP or TCP and automatically detects the tracker protocol, so provisioning is typically straightforward once device APN and reporting settings are correct. To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific protocol and firmware details verify information on the manufacturer site http://www.ulbotech.com/ as implementations and firmware behavior can change over time.

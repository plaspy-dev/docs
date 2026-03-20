---
slug: /topshine/mt01_4g/protocol
id: mt01_4g-protocol
sidebar_label: Protocol
title: TopShine - MT01-4G Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for TopShine MT01-4G integration with Plaspy covering connection context and compatibility
keywords:
  - TopShine MT01-4G protocol
  - TopShine MT01-4G GPS protocol
  - TopShine MT01-4G Plaspy
  - MT01-4G tracking protocol
  - TopShine GPS tracker protocol
  - Plaspy device protocol
  - vehicle tracking protocol TopShine
  - fleet GPS protocol
  - ultrasonic fuel sensor tracking
  - relay immobilizer protocol
---

# TopShine - MT01-4G Protocol

This page documents the public protocol context for using the TopShine MT01-4G tracker with Plaspy. It summarizes how the device communicates with Plaspy servers in general, what connection endpoints and transports are used, and how that communication supports real time tracking, fuel telemetry, driver identification, and immobilizer workflows without exposing private implementation details.

The TopShine MT01-4G is a compact 4G LTE tracker with ultrasonic fuel sensor support, iButton driver ID, relay control for immobilization, two way voice, and a wide 9 to 90 V input. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact on device behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always consult manufacturer documentation for firmware specific details.

## Protocol Overview

The protocol used by the MT01-4G defines how the tracker identifies itself, reports position and telemetry, and sends alarm or status events to a remote fleet platform such as Plaspy. For Plaspy integration this means the tracker must be configured to report to the Plaspy endpoint and send the standard telemetry elements the platform expects.

- Enables periodic and event driven transmission of GPS positions and movement data to Plaspy.
- Carries vehicle telemetry such as fuel level readings from the ultrasonic sensor, ignition state, and sensor alarms to the platform.
- Allows the device to include identifying information so Plaspy can attribute incoming messages to the correct asset.
- Supports command and control exchanges where the platform can send control requests such as relay activation when supported by the tracker.
- Transports alarm conditions and status updates so Plaspy can trigger alerts, logging, and reporting.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a shared server endpoint and port and uses the characteristics of those incoming messages to determine the correct handling for that device. In most setups the user only needs to configure the tracker to report to Plaspy; the platform performs protocol detection automatically.

- Plaspy server endpoint for device reporting is d.plaspy.com with public IP 54.85.159.138.
- Plaspy listens on port 8888 for device traffic and uses the same port for all supported devices.
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint.
- Users generally do not need to select a protocol inside Plaspy if the device is reporting to the Plaspy endpoint correctly.
- Proper device identification on first connection ensures Plaspy associates data with the correct vehicle profile and telemetry mappings.

## Transport and Connection Context

The MT01-4G may be configured to use either UDP or TCP as its transport depending on device support and configuration preferences. Successful connectivity requires pointing the device to the Plaspy reporting endpoint and matching the transport and port expected by the tracker firmware.

- Devices can be configured to report to d.plaspy.com or the IP 54.85.159.138.
- The tracker may use UDP or TCP on port 8888 depending on the firmware and configuration.
- All devices in Plaspy use the same port number for reporting to the platform.
- Network level considerations such as carrier NAT, firewall rules, and APN settings can affect connectivity to the Plaspy endpoint.
- When setting up multiple devices, ensure consistent transport and endpoint settings per the device configuration method provided by the manufacturer.

## Protocol Compatibility Notes

- Firmware differences can change message timing, available telemetry fields, and supported transports between device revisions.
- Hardware revisions or optional sensor modules such as ultrasonic fuel sensors or iButton readers may alter the set of telemetry items reported.
- Manufacturer provided configuration methods such as SMS, vendor web tools, or FOTA may be required to enable Plaspy reporting on some units.
- Selecting TCP versus UDP can affect delivery behavior under poor network conditions; choose the transport supported by your fleet workflow and device firmware.
- Plaspy performs automatic protocol detection but correct device identification and initial configuration are important for reliable onboarding.
- Always validate compatibility and feature support against the device documentation supplied by the manufacturer.

## Why Protocol Understanding Matters

Understanding how the MT01-4G communicates helps with initial setup, troubleshooting connectivity, and ensuring reliable telemetry flows into Plaspy. Knowing the connection expectations and the role of firmware and hardware in reported fields reduces setup time and helps operations teams diagnose issues more quickly.

- Speeds up onboarding by ensuring devices are pointed at the correct Plaspy endpoint and transport.
- Helps diagnose connectivity problems related to APN, carrier NAT, or blocked ports.
- Clarifies which telemetry items to expect in Plaspy dashboards and reports based on firmware and sensor configuration.
- Informs decisions about using TCP or UDP for specific operational needs.
- Supports planning for firmware updates and hardware revisions that may change reporting behavior.

## Why Use Plaspy with This Protocol

Using the TopShine MT01-4G with Plaspy gives fleet operators consolidated visibility into location, fuel telemetry, driver identity, and immobilization controls within a single platform. The combination of continuous fuel monitoring via ultrasonic sensors, iButton driver linking, relay based immobilizer control, and durable power design makes the MT01-4G well suited for mixed fleets where fuel tracking and anti theft controls are priorities.

To learn more about Plaspy and how it works with devices like the MT01-4G visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revision information verify current documentation on the manufacturer website https://www.gztopshine.com/ since protocol support, firmware behavior, and manufacturer implementation may change over time.

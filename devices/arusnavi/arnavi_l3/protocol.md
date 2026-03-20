---
slug: /arusnavi/arnavi_l3/protocol
id: arnavi_l3-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi L3 Protocol
sidebar_class_name: menu_item_tracker
description: Protocol guidance for using the Arusnavi Arnavi L3 GPS tracker with Plaspy including connection context and compatibility notes
keywords:
  - Arusnavi Arnavi L3 protocol
  - Arnavi L3 GPS protocol
  - Arusnavi Plaspy compatibility
  - Arnavi L3 communication protocol
  - Arnavi L3 tracking protocol
  - Arusnavi GPS tracker protocol
  - Arnavi L3 telemetry
  - Arusnavi BLE sensors
  - Arnavi L3 fleet tracking
  - Plaspy tracker protocol
---

# Arusnavi - Arnavi L3 Protocol

This page describes the public protocol context for using the Arusnavi Arnavi L3 tracker with Plaspy. It focuses on the communication and transport details that matter when integrating the compact Arnavi L3 device into the Plaspy platform for real time tracking, telemetry and event reporting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when an Arnavi L3 is configured to report to the Plaspy endpoint. Exact protocol behavior can vary with firmware version, hardware revision and manufacturer implementation, so this page provides general guidance rather than firmware specific instructions.

## Protocol Overview

The Arnavi L3 communicates telemetry, GNSS fixes and event data to backend servers using standard telematics reporting over cellular data. The device's communication protocol defines how it identifies itself, how telemetry is packaged, and how event driven alerts and sensor readings are transmitted to monitoring platforms such as Plaspy.

- The protocol enables the tracker to send periodic position updates and event reports for live mapping and history playback.
- Device identity and session information let the server associate incoming messages with a specific Arnavi L3 unit.
- Telemetry fields include GNSS position, time, discrete input states, ADC readings and BLE sensor data for fuel and temperature.
- Event driven messages deliver alerts for ignition changes, geo events and input thresholds.
- The protocol supports both real time transmission and buffered delivery from the device black box when connectivity is restored.

## How Plaspy Detects the Protocol

Plaspy receives inbound connections to a single shared endpoint and automatically detects the tracker protocol for incoming streams. In most deployments you do not need to select a protocol in Plaspy if the Arnavi L3 is configured to report to the Plaspy endpoint using the proper transport settings.

- Plaspy receives tracker traffic at d.plaspy.com with the server IP 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol when a correctly addressed stream arrives at the shared endpoint.
- All devices in Plaspy use the same port, so you only need to ensure the device reports to the Plaspy endpoint.
- When the Arnavi L3 is pointed to the Plaspy endpoint, Plaspy will associate incoming data with the device identity sent by the tracker.
- If a device is not appearing, verify device reporting settings and firmware documentation rather than changing protocol selection in Plaspy.

## Transport and Connection Context

Connection choices for Arnavi L3 depend on its configuration and the available cellular stack. The device may be configured to use either UDP or TCP transport when reporting to Plaspy, and it supports dual server reporting for redundancy in many firmware builds.

- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen configuration.
- Point the Arnavi L3 to d.plaspy.com or to the Plaspy server IP 54.85.159.138 if required by your provisioning tools.
- All devices in Plaspy use the same port 8888 which simplifies firewall and network configuration.
- Choose UDP for lower overhead or TCP for connection oriented delivery as allowed by firmware and network conditions.
- Ensure APN and cellular data settings are correct so the device can establish the chosen transport to the Plaspy endpoint.

## Protocol Compatibility Notes

- Arnavi L3 is described as compatible with Plaspy via dual server reporting and standard telematics protocols, but implementation details can vary by firmware version.
- Hardware revisions and optional variants such as different input sets or higher voltage models may affect available I O and telemetry fields.
- Transport selection between UDP and TCP is configurable on many devices and may affect message delivery characteristics.
- BLE sensor families supported by Arnavi L3 extend telemetry but may produce different payload fields depending on sensor firmware.
- Manufacturer side features such as dual server redundancy can be used to send identical streams to Plaspy plus a secondary endpoint.
- Validate compatibility and configuration steps with the manufacturer documentation before mass deployment.

## Why Protocol Understanding Matters

A clear understanding of the Arnavi L3 communication protocol and transport behavior helps ensure reliable device onboarding, accurate telemetry collection and efficient troubleshooting when integrating with Plaspy.

- Correct transport and endpoint settings ensure the device can reach d.plaspy.com or 54.85.159.138 on port 8888 and be automatically detected by Plaspy.
- Knowing which telemetry fields the device reports helps map inputs, ADC and BLE sensor data into Plaspy dashboards and alerts.
- Awareness of firmware and hardware variations prevents mismatches between expected and actual device behavior during rollouts.
- Understanding event reporting and buffering behavior aids in diagnosing missed messages and in designing redundancy workflows.
- Protocol knowledge speeds resolution of networking issues such as blocked ports or incorrect APN settings.

## Why Use Plaspy with This Protocol

Using the Arnavi L3 with Plaspy provides a practical path to real time visibility, telemetry aggregation and event driven workflows for fleets and mobile assets. The combination of compact hardware, multi constellation GNSS, BLE sensor support and Plaspy integration enables efficient monitoring, anti theft controls and remote diagnostics for mixed fleets.

If you want to learn more about how Plaspy handles device integrations and platform capabilities, visit https://www.plaspy.com. For the most current device specific protocol details, firmware changes and manufacturer guidance verify the Arnavi L3 documentation at https://www.arusnavi.ru.

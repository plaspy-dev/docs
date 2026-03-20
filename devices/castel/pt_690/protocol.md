---
slug: /castel/pt_690/protocol
id: pt_690-protocol
sidebar_label: Protocol
title: Castel - PT-690 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for Castel PT-690 and how it communicates with Plaspy for GPS tracking and device integration
keywords:
  - Castel PT-690
  - PT-690 protocol
  - Castel PT-690 GPS tracker
  - PT-690 communication protocol
  - Castel tracker Plaspy compatibility
  - pet GPS tracker protocol
  - GSM GPRS GPS tracker protocol
  - Plaspy protocol detection
  - device integration Plaspy
  - PT-690 tracking protocol
---

# Castel - PT-690 Protocol

This page describes the public protocol context for using the Castel PT-690 tracker with the Plaspy platform. It focuses on how the device communicates over mobile data and GPS, and what to consider when configuring the tracker to report to Plaspy for pet location and monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol once the device is reporting to the Plaspy endpoint. Exact protocol behavior and reporting details can vary by PT-690 firmware version, hardware revision, and manufacturer implementation, so device behavior should be validated against the manufacturer documentation and current firmware notes.

## Protocol Overview

The communication protocol for the PT-690 governs how the tracker sends positioning, status, and alert information from the device to a remote server. In practical terms this protocol lets the tracker identify itself, report GPS positions and movement data, and deliver auxiliary information such as battery status and geofence events to Plaspy.

- Enables periodic or event driven reporting of GPS position and device status to a remote server.
- Carries identity information so Plaspy can associate incoming reports with a specific PT-690 device.
- Transports telemetry such as location, movement state, battery alerts, and basic sensor states used by monitoring and alerting.
- Works over the GSM GPRS mobile data path to forward location and telemetry to a cloud endpoint.
- Allows the device to be configured to report to Plaspy so automatic protocol detection can occur.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device reports on a shared endpoint and uses that shared connection to determine the tracker protocol without requiring manual protocol selection in most cases. When a PT-690 is configured to send reports to Plaspy, the platform will match the incoming stream to a compatible parser and associate the device with a Plaspy account.

- Devices should be configured to report to the Plaspy server address d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol once the device is sending data to the platform endpoint.
- Users typically do not need to select a specific protocol inside Plaspy if the tracker reports properly to the Plaspy endpoint.
- Proper device identity and reliable reporting ensure Plaspy can link incoming messages to the correct PT-690 unit.
- If reports are not reaching Plaspy, verify APN and reporting settings on the device and confirm the device is allowed to use the chosen transport.

## Transport and Connection Context

Connection choices determine how the PT-690 delivers its protocol messages to Plaspy. The PT-690 may be configured to use either UDP or TCP depending on the device firmware and available configuration options. Plaspy listens on a single port for all supported devices to simplify configuration.

- Plaspy receives tracker data on port 8888 and all devices supported by Plaspy use this same port.
- Devices can be pointed to the domain d.plaspy.com or directly to the IP 54.85.159.138 when configuring the reporting address.
- The PT-690 may be set to use UDP or TCP on port 8888 depending on device capabilities and user configuration.
- Choose UDP when the device firmware recommends lightweight, connectionless reporting, or TCP if the tracker configuration requires a connection oriented transport.
- Ensure mobile data APN settings are correct so the tracker can establish a connection to the Plaspy endpoint.

## Protocol Compatibility Notes

- PT-690 behavior can vary with firmware releases; check the device firmware version when diagnosing protocol or reporting differences.
- Hardware revisions and factory configuration options can affect which transport modes and report formats are available.
- Manufacturer default settings may point the tracker to the vendor service; update the device reporting host to d.plaspy.com or 54.85.159.138 on port 8888 to use Plaspy.
- Network conditions, APN configuration, and SIM plan allowances may influence reporting reliability and frequency.
- When switching transport between UDP and TCP, confirm the tracker supports the chosen mode and that Plaspy is reachable from the device network.
- Validate compatibility against Castel documentation for device specific commands, configuration methods, and firmware change notes.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure a smooth setup, reliable operation, and efficient troubleshooting when using the PT-690 with Plaspy. Awareness of how the device reports and what information it provides reduces setup time and helps maintain consistent location visibility.

- Helps correctly configure the device reporting host and transport so data reaches Plaspy reliably.
- Makes troubleshooting easier when reports fail to arrive or device identity is not recognized by the platform.
- Guides decisions about reporting intervals, power management, and how often the tracker wakes to send data.
- Supports accurate interpretation of the device telemetry seen in Plaspy dashboards and alerts.
- Minimizes time spent adjusting settings by aligning device configuration with Plaspy expectations.

## Why Use Plaspy with This Protocol

Using the Castel PT-690 with Plaspy provides a single cloud endpoint for collecting location and status reports from pet trackers, allowing organizations and pet owners to consolidate monitoring and alerts in one platform. Plaspy’s automatic protocol detection and unified port simplify device onboarding when the PT-690 is configured to report to the Plaspy endpoint.

If you want to learn more about Plaspy and how it handles device integration and tracking, visit https://www.plaspy.com. For the most current and device specific protocol or firmware details for the Castel PT-690, please verify information on the manufacturer site http://www.castelecom.com/ as protocol behavior and firmware implementations can change over time.

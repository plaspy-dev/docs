---
slug: /concox/jm_vl01/protocol
id: jm_vl01-protocol
sidebar_label: Protocol
title: Concox - JM-VL01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for using the Concox JM-VL01 GPS tracker with Plaspy for device integration and fleet monitoring
keywords:
  - Concox JM-VL01 protocol
  - JM VL01 GPS protocol
  - Concox GPS tracker protocol
  - JM VL01 communication
  - Concox tracking protocol
  - Plaspy device compatibility
  - fleet tracking Concox
  - JM VL01 integration
  - Concox telemetry protocol
  - vehicle tracker JM VL01
---

# Concox - JM-VL01 Protocol

This page describes the public protocol context for using the Concox JM-VL01 tracker with the Plaspy platform. It focuses on how the device communicates at a high level, what connection settings are used to reach Plaspy, and which aspects of device behavior are important when integrating the tracker for fleet monitoring and telematics.

The JM-VL01 is a modern 4G tracker that works on LTE, UMTS, and GSM networks and delivers standard fleet functions such as GPS location, geo-fence alerts, event-triggered notifications, ignition detection, remote cut-off, optional RS485 sensor support, and an in-cabin panic button. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The device protocol is the communication layer the JM-VL01 uses to send location, status, and event data to a remote server and to receive control commands or configuration when applicable. For Plaspy integration, the focus is on ensuring the device is configured to report to the Plaspy endpoint and that transport settings match the tracker capabilities.

- Enables periodic and event-driven reporting of GPS position and vehicle status to Plaspy.
- Identifies the device instance so Plaspy can associate incoming data with the correct vehicle or asset.
- Encapsulates telemetry such as ignition status, movement alerts, geofence events, and optional sensor readings in a format the server can interpret.
- Lets the server send remote actions or parameter updates when supported by the device and deployment.
- Works over standard network transports so devices on cellular networks can reliably reach Plaspy.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for incoming device reports and applies automatic detection to associate incoming messages with the correct tracker type. When a JM-VL01 is configured to report to the Plaspy address, manual protocol selection inside the platform is normally not required.

- Plaspy server domain is d.plaspy.com and can also be reached by the public server IP 54.85.159.138.
- Plaspy uses port 8888 for device communications and all devices in Plaspy use the same port.
- The platform automatically detects the tracker protocol when the device reports to the Plaspy endpoint.
- Users typically only need to configure the device to point to d.plaspy.com or the provided server IP and ensure the correct transport is selected on the tracker.
- If a device uses expected report fields and identifiers, Plaspy will map the incoming messages to the correct vehicle profile automatically.

## Transport and Connection Context

Connection and transport choices determine how the JM-VL01 reaches Plaspy from the mobile network. The device may be configured to use either UDP or TCP depending on firmware options and the reliability needs of the deployment. Understanding these options helps ensure the device consistently reaches the Plaspy server.

- The device may be configured using UDP or TCP on port 8888 depending on tracker support and site configuration.
- Devices can be pointed to the domain d.plaspy.com or directly to 54.85.159.138 if DNS is not used.
- Plaspy uses the same port 8888 for all supported devices to simplify device setup and network configuration.
- Choose TCP when a reliable transport is required for critical commands or acknowledgements if the device supports it; UDP may be used for low-overhead periodic reporting.
- Ensure any carrier APN or firewall policies permit outbound connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change the exact message content and available features; always check device firmware level when validating behavior.
- Hardware revisions or optional modules such as RS485 sensors may add or alter telemetry fields that the server needs to interpret.
- Transport selection (UDP versus TCP) is determined by the device firmware and configuration and may affect delivery semantics.
- Manufacturer-side configuration tools may use different default server settings; confirm the device is set to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the protocol when the device reports correctly, but network-level issues such as blocked ports or incorrect APN may prevent successful registration.
- Validate compatibility against the latest Concox documentation and release notes for device-specific behaviors.

## Why Protocol Understanding Matters

Understanding how the JM-VL01 communicates helps administrators and integrators get devices online quickly, diagnose connectivity or data issues, and make informed choices about firmware and transport settings. Clear protocol context reduces time spent troubleshooting and improves long-term reliability of fleet monitoring.

- Helps ensure the device is configured to reach d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can receive reports.
- Makes it easier to verify whether the device should use UDP or TCP for your deployment and what effect that has on delivery.
- Aids troubleshooting when messages do not appear in Plaspy by narrowing focus to network, firmware, or configuration layers.
- Clarifies which telemetry fields to expect from features like ignition detection, geo fences, remote cut-off, and optional RS485 sensors.
- Supports planning for firmware upgrade paths and hardware revisions that can change protocol behavior.

## Why Use Plaspy with This Protocol

Using the Concox JM-VL01 with Plaspy gives organizations a straightforward path to collect vehicle location, status, and event data in a single platform. The JM-VL01's array of fleet-focused features—position reporting, events, ignition monitoring, remote immobilization, and sensor inputs—maps well to the operational visibility and alerting that Plaspy provides.

Plaspy simplifies device setup by exposing a single, consistent endpoint and port for all devices and by automatically detecting the reporting protocol when the JM-VL01 is pointed to the platform. To learn more about how Plaspy handles device connections and fleet management features, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware specifications for this Concox tracker, verify information on the manufacturer site https://www.iconcox.com/.

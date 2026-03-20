---
slug: /autoseeker/at_20/protocol
id: at_20-protocol
sidebar_label: Protocol
title: Autoseeker - AT-20 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Autoseeker AT-20 connectivity with Plaspy server and common transport settings
keywords:
  - Autoseeker AT-20 protocol
  - Autoseeker AT-20 GPS protocol
  - AT-20 communication protocol
  - AT-20 tracking protocol
  - Autoseeker GPS protocol
  - AT-20 Plaspy compatibility
  - Plaspy tracker protocol
  - vehicle tracker protocol
  - fleet management protocol
  - GPS telemetry protocol
---

# Autoseeker - AT-20 Protocol

This page summarizes the public protocol context for using the Autoseeker AT-20 tracker with Plaspy. It focuses on the communication and connection considerations that matter when the AT-20 reports location, alarms, and vehicle telemetry to Plaspy for real time tracking and fleet management. The information here is intended for technical integrators and fleet managers who need to understand how device reporting interacts with the Plaspy platform without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. The AT-20 supports multiple transports and firmware variants, so exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. Plaspy’s public endpoint information for device reporting is d.plaspy.com and 54.85.159.138 on port 8888, and the device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.

## Protocol Overview

The protocol used by the AT-20 governs how the device identifies itself, reports GNSS positions, and sends vehicle telemetry and event notifications to a remote server. In general terms, the communication protocol determines how timestamps, coordinates, input states, and alarm types are packaged and transmitted so Plaspy can ingest and present usable data to users.

- Enables the AT-20 to transmit GNSS positions, timestamps, and telemetry such as ACC state and motion to Plaspy
- Carries event notifications including geofence entry and exit, overspeed, and SOS alarms for timely alerting
- Conveys accessory and sensor data when optional inputs like fuel sensors or external accessories are present
- Supports transport over cellular links so the device can report via LTE or fallback GPRS to the Plaspy endpoint
- Allows Plaspy to map incoming device identifiers to a customer account and render real time and historical data

## How Plaspy Detects the Protocol

Plaspy receives incoming device traffic at a shared endpoint and port and uses automated detection to identify the tracker protocol so that messages are parsed and routed correctly. In most cases, a properly configured AT-20 that points to Plaspy will not require manual protocol selection inside the platform.

- Plaspy listens on a common server endpoint at d.plaspy.com and on the public IP 54.85.159.138
- All devices in Plaspy use the same port which is 8888 so device configuration is simplified
- The AT-20 may be configured to report to Plaspy using either UDP or TCP on port 8888 depending on device settings
- When the device is correctly reporting to the Plaspy endpoint, protocol detection and mapping to your account happen automatically
- Users typically only need to confirm device reporting settings and account association rather than choose a protocol manually

## Transport and Connection Context

Connection choices at the transport layer affect reliability, latency, and behavior during coverage transitions. The AT-20 supports cellular transports and can be set to communicate using either UDP or TCP toward Plaspy. Devices may be configured to reach Plaspy by hostname or IP depending on installer preference and network requirements.

- The AT-20 can be configured to use either UDP or TCP on port 8888 for reporting to Plaspy
- Devices may point to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138 for device reporting
- Plaspy uses port 8888 for all supported devices which reduces configuration complexity across deployments
- Transport selection may affect retransmission behavior and timeliness depending on network conditions and device firmware
- SMS and GPRS fallback modes are commonly available on vehicle trackers and can complement primary IP reporting when needed

## Protocol Compatibility Notes

- Protocol behavior can vary between firmware versions and hardware revisions even for the same AT-20 model
- Manufacturer configuration options such as transport choice and reporting frequency affect how data appears in Plaspy
- Accessories and optional sensors may require firmware support to report telemetry consistently to Plaspy
- Always confirm that the device is pointed to d.plaspy.com or 54.85.159.138 and that the reporting transport is set to use port 8888
- Plaspy automatically detects the tracker protocol but verifying device identity and report samples helps avoid onboarding issues
- Consult manufacturer release notes for firmware changes that might alter reporting fields or event behavior

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure reliable setup, smoother troubleshooting, and better long term performance of devices connected to Plaspy. Clear expectations about what the device will send and when it will send it reduce time spent diagnosing connectivity and event issues.

- Facilitates correct initial configuration so the AT-20 reports to d.plaspy.com or 54.85.159.138 on port 8888
- Helps troubleshoot missing positions, delayed alerts, or inconsistent telemetry when firmware or network conditions change
- Informs decisions about transport selection such as choosing UDP or TCP based on reliability needs
- Guides firmware update planning to preserve compatibility with Plaspy and any accessory integrations
- Supports accurate interpretation of alarms and sensor readings in Plaspy dashboards and reports

## Why Use Plaspy with This Protocol

Using the Autoseeker AT-20 with Plaspy provides a practical solution for organizations that need dependable vehicle visibility, real time alerts, and historical route analysis. The AT-20’s vehicle focused inputs such as ACC detection, SOS, and optional sensor support supply the telemetry that fleet operators rely on, while Plaspy ingests those feeds to power tracking, alerting, and reporting workflows.

If you want to learn more about how Plaspy works with devices like the AT-20 and to explore deployment options, visit https://www.plaspy.com. For the most current device specific protocol behavior, firmware releases, and manufacturer implementation details consult the Autoseeker documentation at https://autoseekergps.com/.

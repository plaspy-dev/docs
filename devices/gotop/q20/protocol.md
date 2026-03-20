---
slug: /gotop/q20/protocol
id: q20-protocol
sidebar_label: Protocol
title: GOTOP - Q20 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for GOTOP Q20 tracker integration with Plaspy covering connection context and compatibility
keywords:
- GOTOP Q20 protocol
- GOTOP Q20 GPS protocol
- GOTOP Q20 Plaspy
- GOTOP tracker protocol
- GPS tracker communication
- Q20 tracking protocol
- Plaspy device compatibility
- personal tracker integration
- hybrid positioning tracker
- SOS GPS tracker
---

# GOTOP - Q20 Protocol

This page describes the public protocol context for using the GOTOP Q20 tracker with the Plaspy fleet and safety platform. It focuses on how the device communicates with Plaspy in non sensitive terms, what connection settings are commonly used, and practical compatibility considerations for administrators and integrators. The Q20 is Plaspy compatible out of the box and provides GPS WiFi and LBS assisted positioning, SOS and two way voice, fall detection, and buffered reporting that Plaspy can ingest for monitoring and alerts.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. The Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138. The port is 8888 and the device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port, but exact protocol behavior can vary by firmware version hardware revision and manufacturer implementation, so verify device specific details when needed.

## Protocol Overview

The Q20 tracker protocol is the set of messages and reporting behavior the device uses to identify itself and deliver position and status data over cellular networks for ingestion by Plaspy. Public protocol context helps you understand how the tracker establishes a connection how telemetry is reported and which transport options are commonly used without exposing private implementation details.

- Enables the Q20 to send position and sensor updates that Plaspy converts into map locations alerts and history records
- Carries device identity and status so Plaspy can associate telemetry with a specific asset or user
- Supports alarm and event reporting such as SOS fall detection and motion triggers for immediate notification
- May include buffered uploads so the device preserves records when connectivity is lost and uploads them when online
- Works over standard network transports so Plaspy can receive telemetry from many devices using the same endpoint

## How Plaspy Detects the Protocol

Plaspy receives incoming connections at a shared endpoint and port and uses automated detection to recognize the reporting format of a device. For most users this means there is no need to manually select a protocol inside Plaspy once the Q20 is configured to report to the correct Plaspy address and port.

- Plaspy automatically detects the tracker protocol when telemetry arrives at d.plaspy.com or 54.85.159.138
- The Plaspy service listens on port 8888 and supports both UDP and TCP transports as configured by the device
- Proper device settings and a reachable network path are usually all that is required for Plaspy to identify the Q20 feed
- Users typically do not need to choose a protocol in the platform if the device is configured to report to the Plaspy endpoint
- Detection is based on received messages and common reporting patterns rather than manual configuration by end users

## Transport and Connection Context

The Q20 can report position and events over the mobile data network using standard transport options. Administrators should understand the network layer choices and requirements so devices can reliably reach the Plaspy service.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and operator preference
- Devices may be pointed to the Plaspy domain d.plaspy.com or the public IP 54.85.159.138 as the reporting endpoint
- Because all devices in Plaspy use the same port administrators can standardize firewall and NAT rules around port 8888
- Choose UDP when low overhead is desired and TCP when ordered reliable delivery is preferred subject to device capabilities
- Ensure cellular APN and data settings on the Q20 allow outbound traffic to the Plaspy endpoint for reliable reporting

## Protocol Compatibility Notes

- Firmware revisions can change message timing optional fields or supported transports; confirm the Q20 firmware version for precise behavior
- Hardware revisions or regional variants of the Q20 may include different radio band support or sensor configurations that affect reporting
- Manufacturer supplied configuration tools or SMS commands can change a device reporting target between DNS and IP endpoints
- Buffered GPRS or SMS behaviour varies and may affect how historical records are uploaded after an offline period
- Selecting UDP versus TCP can influence message delivery characteristics especially across network NATs or mobile operator proxies
- Always validate compatibility against the manufacturer documentation and any release notes for device firmware

## Why Protocol Understanding Matters

Understanding the Q20 communication protocol helps with correct initial setup efficient troubleshooting and predictable long term operation when using Plaspy. Knowing the connection context and typical reporting behavior reduces integration time and improves reliability.

- Simplifies device provisioning by ensuring the correct endpoint transport and APN settings
- Helps diagnose common connectivity issues such as blocked ports DNS resolution failures or APN misconfiguration
- Clarifies expectations for how alarms buffered records and voice events will arrive at Plaspy
- Supports planning for mobile data use battery impact and reporting frequency trade offs
- Improves change management when firmware updates or manufacturing revisions alter device behavior

## Why Use Plaspy with This Protocol

Using the GOTOP Q20 with Plaspy gives organizations practical real time visibility and incident handling for personal safety and small asset tracking. The Q20’s hybrid positioning SOS and fall detection features pair with Plaspy’s centralized dashboards alerting and history tools to deliver actionable situational awareness for guardians operators and safety teams.

If you want to learn more about Plaspy visit https://www.plaspy.com. For the most current device specific protocol and firmware details verify information with the device manufacturer at https://www.gotop.cc/ as protocol support firmware behavior and implementation details can change over time.

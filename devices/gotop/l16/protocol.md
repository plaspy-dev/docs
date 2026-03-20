---
slug: /gotop/l16/protocol
id: l16-protocol
sidebar_label: Protocol
title: GOTOP - L16 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the GOTOP L16 wearable GPS tracker and how it communicates with Plaspy for real time tracking and alerts
keywords:
  - GOTOP L16 protocol
  - GOTOP L16 GPS protocol
  - GOTOP L16 communication protocol
  - GOTOP L16 tracking protocol
  - GOTOP L16 Plaspy
  - GOTOP GPS tracker protocol
  - wearable GPS protocol
  - tracker to server protocol
  - fleet management tracker protocol
  - GPS watch protocol
---

# GOTOP - L16 Protocol

This page describes the public protocol context for using the GOTOP L16 GPS Smart Watch with Plaspy. It focuses on the communication and connection-level details that affect how the device reports location, telemetry, and events to the Plaspy platform without exposing manufacturer private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page covers practical, non-sensitive protocol context and integration considerations for the L16 when paired with Plaspy.

## Protocol Overview

The L16 communicates measurement and event data from the wearable to a remote server using its built-in cellular and local radios. The protocol governs how the watch identifies itself, how position and health telemetry are packaged for transmission, and which events (for example SOS or two way call events) are forwarded to the server for processing and alerting.

- The protocol enables device identification and session reporting so Plaspy can associate incoming data with the correct L16 device record.
- Telemetry such as GNSS positions, BLE assisted fixes, and health metrics are delivered as periodic or event driven messages to the server.
- SOS alarms and two way call events are transmitted so Plaspy can generate alerts and notifications for caregivers and monitoring teams.
- Protocol behavior can include heartbeat reporting, position intervals, and event flags that inform server side storage and playback.
- The communication protocol ensures data is delivered reliably over IP transport to Plaspy for real time dashboards and historical logs.

## How Plaspy Detects the Protocol

Plaspy receives incoming data on a single shared endpoint and port and applies automatic protocol detection to identify the tracker format. In most cases users do not need to manually select a protocol inside Plaspy if the device is configured to report to the Plaspy endpoint using the correct connection settings.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for device reporting.
- All devices in Plaspy use the same port and Plaspy listens on port 8888 for tracker traffic.
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint and routes messages accordingly.
- If a device is properly configured to report to d.plaspy.com or 54.85.159.138 on port 8888, protocol selection in the platform is typically unnecessary.
- Automatic detection helps simplify onboarding across a wide range of devices and reduces manual configuration steps.

## Transport and Connection Context

Connection choices affect how the L16 delivers messages to Plaspy. The device supports IP based reporting and may use either UDP or TCP depending on device configuration and network conditions. Understanding the transport context helps with firewall rules, SIM provisioning, and carrier troubleshooting.

- The device may be configured to use UDP or TCP on port 8888 to send data to Plaspy.
- Plaspy accepts device reports addressed to d.plaspy.com or directly to 54.85.159.138 on the shared port.
- All Plaspy supported devices use the same port number, which simplifies server side configuration for integrators and operators.
- Choose transport (UDP or TCP) based on device capability and reliability needs; the L16 can be configured according to manufacturer instructions.
- Network and carrier settings such as APN, SIM activation, and outbound firewall rules must allow connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions on the L16 can change message frequency, included telemetry fields, or event names; confirm expected behavior for your firmware.
- Hardware revisions and optional features such as BLE or eSIM can affect which telemetry types are available to Plaspy.
- Transport selection between UDP and TCP may be constrained by carrier networks or device firmware defaults.
- Some features like BLE assisted positioning or specific health telemetry fields may require enabling in device configuration or companion setup flows.
- Validate the device reporting host and port are set to d.plaspy.com or 54.85.159.138 and port 8888 to ensure reliable delivery.
- Always cross check manufacturer release notes when updating device firmware to confirm continuing compatibility with Plaspy.

## Why Protocol Understanding Matters

A clear understanding of the device communication protocol reduces integration friction and improves operational reliability when the L16 is used with Plaspy. Knowing what to expect from the protocol helps with setup, troubleshooting, and long term maintenance.

- Ensures correct server address and port are configured so data reaches Plaspy without being blocked by network policies.
- Helps interpret incoming telemetry and event timing when investigating gaps or unexpected alerts.
- Enables informed decisions about transport selection and battery life trade offs for reporting intervals.
- Supports coordinated troubleshooting with carriers, hardware vendors, and the Plaspy support team.
- Provides context for firmware upgrade planning and feature enablement to maintain stable reporting.

## Why Use Plaspy with This Protocol

Using the GOTOP L16 with Plaspy brings wearable location, health telemetry, and emergency features into a single monitoring solution. Plaspy collects positions, SOS events, health metrics, and call activity from the L16 and makes that data available for real time visibility, alerts, and historical playback to support caregivers, monitoring teams, and operational staff.

Plaspy simplifies device onboarding by sharing a common listening port and endpoint and by automatically detecting the tracker protocol when the L16 reports to d.plaspy.com or 54.85.159.138 on port 8888. To learn more about how Plaspy works with wearable trackers like the L16 visit https://www.plaspy.com. Please verify device protocol details, firmware behavior, and other manufacturer specifics on the official GOTOP website https://www.gotop.cc/ since protocol support and device implementation can change over time.

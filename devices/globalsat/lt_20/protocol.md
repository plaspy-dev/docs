---
slug: /globalsat/lt_20/protocol
id: lt_20-protocol
sidebar_label: Protocol
title: GlobalSat - LT-20 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the GlobalSat LT-20 tracker with Plaspy including connection settings and compatibility notes
keywords:
  - GlobalSat LT-20 protocol
  - LT-20 Plaspy compatibility
  - GlobalSat GPS protocol
  - LT-20 tracking protocol
  - LoRa GPS tracker protocol
  - LT-20 asset tracking
  - GlobalSat LT-20 communication
  - vehicle tracking GlobalSat
  - LT-20 firmware compatibility
  - Plaspy tracker integration
---

# GlobalSat - LT-20 Protocol

This page describes the public protocol context for using the GlobalSat LT-20 tracker with Plaspy. It explains how the tracker communicates at a high level, which Plaspy connection settings are relevant, and what to consider when integrating the LT-20 family of devices for asset and livestock tracking.

The LT-20P is a solar powered LoRa GPS tracker optimized for long lasting outdoor asset tracking such as cattle and farming equipment. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker reporting protocol is the set of messages and conventions the LT-20 uses to send location, motion, and battery information so that a platform like Plaspy can receive and interpret it. For the LT-20P this generally involves LoRa radio uplinks to a network gateway and then delivery over IP to a server endpoint where Plaspy receives the data.

- The protocol identifies the device and delivers essential telemetry such as GPS location, motion events from the accelerometer, and low power alerts.
- It provides periodic status or heartbeat messages so the server can monitor device availability.
- Telemetry is encoded by the device vendor and forwarded by network infrastructure to Plaspy for decoding and mapping to device state.
- The protocol supports alarms and event reporting so movement, tampering, or battery conditions can trigger immediate visibility.
- Regional LoRa frequency selection affects radio behavior but the reporting protocol governs what data is sent and how the server interprets it.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and uses that input to identify which tracker protocol is in use. In most cases a properly configured LT-20 device only needs to report to the Plaspy endpoint and Plaspy will handle protocol detection automatically, so manual protocol selection in the platform is typically unnecessary.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- The device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol

## Transport and Connection Context

Connection context covers how messages reach Plaspy after they leave the LT-20 radio. Depending on deployment and configuration, device uplinks travel through LoRa network infrastructure to an internet gateway which forwards reports over TCP or UDP to Plaspy on a fixed endpoint and port.

- The LT-20P transmits over LoRa and is region tuned to US 915 MHz, AS 923 MHz, or EU 868 MHz; the IP delivery path from gateway to server uses standard internet transport.
- Devices or gateways can point to d.plaspy.com or 54.85.159.138 for delivery to Plaspy.
- The port used by Plaspy is 8888 and this same port is used for all supported devices.
- Depending on the device or gateway configuration, either UDP or TCP may be used to send data to Plaspy on port 8888.
- Confirm your LoRa network operator or gateway can forward device payloads to the configured Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, fields, or event behavior; confirm the LT-20 firmware version when validating compatibility.
- Hardware revisions and different submodels within the LT-20 family may alter available sensors or reporting intervals.
- Regional radio settings for US 915, AS 923, and EU 868 affect radio layer behavior but do not necessarily change application layer reporting.
- Some deployments use a LoRa network server or gateway translation that alters how payloads appear to Plaspy; verify end to end delivery.
- Transport selection between UDP and TCP may be constrained by gateways or network operators; ensure the chosen transport is supported and configured.
- Always validate protocol behavior against the latest manufacturer documents for device specific command sets and firmware notes.

## Why Protocol Understanding Matters

Understanding the LT-20 reporting protocol helps ensure reliable setup, accurate telemetry, and faster troubleshooting when integrating with Plaspy. A clear view of how data moves from device to platform reduces setup time and improves operational reliability.

- Correct transport and endpoint settings prevent data loss and ensure the device is visible in Plaspy.
- Knowledge of reporting frequency and event triggers helps tune battery life and network usage for solar powered trackers.
- Awareness of firmware and hardware variations guides expectations for available telemetry fields and alarms.
- Understanding the role of gateways and network servers clarifies where to check for delivery issues when data does not reach Plaspy.
- Protocol awareness makes it easier to map device data to Plaspy fields for reporting and alerts.

## Why Use Plaspy with This Protocol

Using Plaspy with the GlobalSat LT-20 family provides a straightforward path to centralized visibility for livestock, equipment, and remote assets. Plaspy’s server endpoint accepts reports from devices that are configured to forward uplinks, and the platform’s automatic protocol detection reduces manual setup steps when the device is correctly pointed to Plaspy.

If you are evaluating LT-20 deployment for fleet or agricultural tracking, Plaspy can consolidate telemetry and events into dashboards, alerts, and reporting that support operational oversight and response. To learn more about Plaspy, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions, verify information with GlobalSat at https://www.globalsat.com.tw/.

---
slug: /autofon/dx/protocol
id: dx-protocol
sidebar_label: Protocol
title: AutoFon - DX Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for AutoFon DX Маяк and how the device communicates with Plaspy for reliable location reporting and monitoring
keywords:
  - AutoFon DX Маяк protocol
  - AutoFon DX Mayak GPS protocol
  - AutoFon DX protocol Plaspy
  - AutoFon DX communication protocol
  - AutoFon DX tracking protocol
  - AutoFon GPS tracker protocol
  - DX Mayak Plaspy compatibility
  - AutoFon vehicle tracker protocol
  - AutoFon GLONASS GPS tracker
  - GPRS GPS tracker protocol
---

# AutoFon - DX Маяк Protocol

This page describes the public protocol context for integrating the AutoFon DX Маяк GPS tracker with Plaspy. It focuses on how the device communicates to a monitoring server and what aspects of that communication are relevant when pairing the tracker with Plaspy for location reporting, event notification, and remote monitoring.

The AutoFon DX Маяк is a compact GLONASS/GPS tracker with 2G GPRS and SMS reporting, an accelerometer, BLE features, and multiple power modes. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, or manufacturer configuration. Where appropriate, review the device documentation from the manufacturer to confirm firmware specific behavior.

## Protocol Overview

The tracker protocol is the set of messaging conventions the AutoFon DX Маяк uses to identify itself and deliver telemetry and events to a monitoring platform. For integration with Plaspy the protocol's public role is to reliably transmit coordinates, movement events, and status information so Plaspy can present actionable location data and alerts to users.

- The protocol conveys positional data from the GLONASS/GPS receiver and fallback cell tower estimates when satellites are unavailable.
- It reports event and status information such as accelerometer triggers, battery state, signal strength, and device mode.
- The protocol supports delivery over 2G networks via GPRS to a monitoring server or by SMS to configured phone numbers.
- Device configuration and command responses can be sent remotely using the same transport path when supported by the device firmware.
- The protocol behavior and available message fields can change between firmware releases and hardware revisions, so implementations should be validated against manufacturer documentation.

## How Plaspy Detects the Protocol

Plaspy listens on a shared public endpoint and automatically determines the tracker protocol when a correctly configured device connects. Typically, users do not need to select a protocol manually inside Plaspy when the device is configured to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port is 8888 and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint.
- Proper device reporting settings on the tracker side (target host and transport) are generally sufficient for Plaspy to recognize the device.
- If a device does not appear to be detected, check device reporting parameters, firmware version, and network connectivity.

## Transport and Connection Context

Connection context describes how the tracker reaches Plaspy rather than the internal structure of messages. The AutoFon DX Маяк can send reports over 2G GPRS or SMS; when using GPRS it typically targets the monitoring server address and port provided by the platform.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be pointed to the Plaspy endpoint by domain d.plaspy.com or directly to 54.85.159.138.
- All devices in Plaspy use the same port which simplifies server settings and device provisioning.
- GPRS reporting is the common path for continuous telemetry; SMS remains available for alerts and when data connectivity is not present.
- Network reliability, APN settings, and SIM operator behavior influence whether TCP or UDP is preferable for a given deployment.

## Protocol Compatibility Notes

- Firmware revisions can add, remove, or change message fields and behavior; always check the device firmware level when diagnosing compatibility.
- Hardware revisions or different product runs can introduce variant behavior even under the same model name.
- Some features documented by the manufacturer (for example BLE presence or direction finding) are outside the core reporting protocol and may use separate channels or apps.
- Transport choice (TCP vs UDP) must match what the device firmware supports and what is configured on the device.
- SMS-based reporting does not use the Plaspy GPRS endpoint and is useful as a fallback for critical alerts.
- Validate device settings and capabilities against the official AutoFon documentation before large scale deployment.

## Why Protocol Understanding Matters

Knowing how the tracker communicates helps ensure reliable delivery of position updates, correct interpretation of events, and efficient power management in the field. A practical understanding reduces troubleshooting time and helps match device configuration to operational needs.

- It helps you choose the appropriate transport (GPRS vs SMS, TCP vs UDP) for reliability and battery life.
- It clarifies which telemetry fields the platform can expect and how event triggers from the accelerometer will be represented.
- It aids in diagnosing connectivity issues related to APN, SIM, or server reachability.
- It guides decisions about reporting intervals, continuous online versus interval sleep modes, and how those choices affect battery life.
- It supports planning for firmware updates and hardware revisions that may alter device behavior over time.

## Why Use Plaspy with This Protocol

Using Plaspy with the AutoFon DX Маяк provides a centralized monitoring endpoint for location, movement events, and device status across a mixed fleet of trackers. Plaspy's shared endpoint model and automatic protocol detection simplify onboarding and reduce the need for manual protocol selection.

Plaspy offers consolidated visibility and alerting for assets tracked by AutoFon devices, which is valuable for fleet operators, asset protection, and personal safety applications. To learn more about integrating devices like the AutoFon DX Маяк with Plaspy visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer implementation on the official AutoFon website https://www.autofon.ru/ as these elements can change over time.

---
slug: /gotop/l15/protocol
id: l15-protocol
sidebar_label: Protocol
title: GOTOP - L15 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for GOTOP L15 GPS tracker and how it communicates with Plaspy for tracking SOS and telemetry
keywords:
  - GOTOP L15 protocol
  - GOTOP L15 GPS protocol
  - GOTOP L15 tracking protocol
  - GOTOP L15 Plaspy compatibility
  - GOTOP L15 communication protocol
  - GOTOP L15 GPS tracker
  - GOTOP L15 SOS tracker
  - GOTOP L15 wearable GPS
  - Plaspy device protocol
  - Plaspy tracker compatibility
---

# GOTOP - L15 Protocol

This page covers the public protocol context for using the GOTOP L15 wearable GPS tracker with Plaspy. It explains the role of the device reporting protocol in delivering location, SOS and basic telemetry to Plaspy and summarizes the connection settings Plaspy exposes for public integration and device configuration.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation, so treat the information below as general coverage of how the L15 exchanges usable data with Plaspy rather than a step by step protocol manual.

## Protocol Overview

The L15 uses its cellular modem, GNSS receiver and supplemental sensors to report location and event data to a remote endpoint. The device protocol defines how those reports are packaged, how events like SOS presses are indicated, and which telemetry fields are available for Plaspy to ingest.

- Enables transmission of GPS coordinates and hybrid location inputs such as BLE, Wi Fi and LBS to the cloud.
- Communicates device events including SOS alerts, battery state, motion or activity events, and periodic status reports.
- Carries basic telemetry that Plaspy maps into dashboard markers, alerts and history for caregivers and administrators.
- Identifies the device to the platform so Plaspy can associate incoming reports with the correct asset and user profile.
- Supports real time and periodic reporting modes depending on device configuration and battery management settings.

## How Plaspy Detects the Protocol

Plaspy receives reports from devices on a shared endpoint and automatically determines the incoming tracker protocol so users typically do not need to select a protocol manually inside Plaspy. Proper device configuration to point at the Plaspy endpoint is the usual requirement for automatic detection to succeed.

- Plaspy listens on a single public endpoint for device reports and detects the tracker protocol automatically.
- The public Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct configuration where an IP is required.
- Plaspy uses port 8888 for device reporting and all devices in Plaspy use the same port for consistency.
- If the L15 is configured to report to the Plaspy endpoint, protocol selection in the Plaspy UI is usually unnecessary.
- Ensure the device IMEI or unique identifier is provisioned or recognized by Plaspy to allow correct asset mapping after initial reporting begins.

## Transport and Connection Context

Connection setup is a transport detail that sits beneath the tracker protocol. For the L15, the device can be pointed at the Plaspy endpoint using standard network transports supported by the device firmware and carrier.

- The L15 may be configured to use UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices may be configured to send reports to the domain d.plaspy.com or directly to the IP address 54.85.159.138 when an IP is required.
- Plaspy uses the same port 8888 for all supported trackers which simplifies provisioning and firewall rules.
- Choose UDP for lower overhead reporting when supported by the firmware, or TCP where reliable delivery or session behavior is preferred by the device configuration.
- Verify the carrier data plan and APN settings on the L15 so the device can establish cellular connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields and supported transports; confirm the device firmware level when validating behavior.
- Hardware revisions may alter GNSS, BLE or sensor performance, which affects the type and frequency of data the device reports.
- Manufacturer side configuration options can enable or disable certain reports such as SOS confirmations, fall detection or activity summaries.
- Transport selection matters for network behavior and battery life; UDP and TCP are both supported subject to device firmware capabilities.
- Plaspy automatically detects the incoming tracker protocol, but a correct endpoint and device identifier are required for automatic association.
- Consult manufacturer documentation and release notes to confirm any firmware specific reporting modes that could affect integration.

## Why Protocol Understanding Matters

Understanding how the L15 communicates with Plaspy helps with reliable setup, meaningful troubleshooting and predictable long term operation. Even when Plaspy detects the protocol automatically, knowing the communication context speeds resolution of common connectivity and data mapping issues.

- Speeds initial provisioning by ensuring the device is pointed to d.plaspy.com or 54.85.159.138 and using port 8888.
- Simplifies firewall and network configuration by using a single known port for all devices in Plaspy.
- Improves troubleshooting when telemetry or events are missing by narrowing checks to transport, APN and firmware settings.
- Helps optimize battery life and reporting cadence by choosing appropriate transport and reporting intervals in device settings.
- Enables clearer expectations for caregivers and administrators about what data types and event triggers will be available in Plaspy.

## Why Use Plaspy with This Protocol

Using the GOTOP L15 with Plaspy gives care programs and safety teams a practical way to centralize location, SOS events and basic wellbeing telemetry in a single platform. The L15 combines 4G connectivity, GNSS, BLE and optional sensors to deliver hybrid location and emergency alerts while Plaspy maps those inputs into monitoring views, alerting workflows and history logs.

If you want to learn more about Plaspy and how it integrates with devices like the GOTOP L15, visit https://www.plaspy.com. For the most current and device specific protocol, firmware behavior and implementation details, please verify the latest information on the manufacturer site https://www.gotop.cc/ as details can change over time.

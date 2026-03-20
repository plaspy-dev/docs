---
slug: /arknav/r_12/protocol
id: r_12-protocol
sidebar_label: Protocol
title: ArkNav - R-12 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the ArkNav R-12 GPS tracker and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - ArkNav R-12 protocol
  - ArkNav R-12 GPS protocol
  - ArkNav R-12 Plaspy compatibility
  - R-12 tracker protocol
  - R-12 communication protocol
  - ArkNav vehicle tracker integration
  - Plaspy device protocol
  - fleet tracking ArkNav
  - vehicle telemetry protocol
  - R-12 LTE M tracker
---

# ArkNav - R-12 Protocol

This page covers the public protocol context for using the ArkNav R-12 GPS tracker with Plaspy. It focuses on the communication aspects that matter when the R-12 reports location, status, and event telemetry to the Plaspy platform and explains how those device messages participate in real time monitoring, alerts, and basic device management workflows.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by R-12 firmware version, hardware revision, and manufacturer implementation, so this page provides general, non sensitive guidance while encouraging confirmation against manufacturer documentation.

## Protocol Overview

The protocol used by the ArkNav R-12 describes how the device formats and transmits GNSS positions, status updates, and event messages to a remote server. In a Plaspy deployment the practical result is that the R-12 delivers usable location and telemetry that Plaspy maps, timestamps, and presents to users for monitoring and reporting.

- Carries periodic position reports so Plaspy can display live location on maps and compute trip histories
- Sends event driven messages such as ignition state, motion detection, and speed that drive alerts and trip logic
- Conveys device status and telemetry needed for health monitoring such as power state and connectivity fallback information
- Enables remote device configuration and OTA updates when the device and manufacturer provisioning support remote management
- Supports reliable delivery on cellular networks so positional data arrives at Plaspy for near real time use

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a shared endpoint and automatically determines the tracker protocol to apply. For most installations, no manual protocol selection is required in Plaspy when the R-12 is configured to report to the Plaspy server using the standard connection settings.

- Devices should be configured to report to d.plaspy.com or 54.85.159.138 using port 8888
- Plaspy accepts device connections on the same port for all supported devices and applies automatic protocol detection
- The device can use either UDP or TCP transport on port 8888 depending on R-12 configuration and network conditions
- When the R-12 is properly pointed at the Plaspy endpoint the user typically does not need to choose a protocol inside Plaspy manually
- Ensure the device is provisioned with a working cellular SIM and operator settings so it can reach the Plaspy endpoint

## Transport and Connection Context

Connection transport is an operational detail that determines how the R-12 delivers its messages to Plaspy. The R-12 supports cellular connectivity and will use the configured transport that best fits the device firmware and network environment.

- R-12 devices may be configured to use UDP or TCP on port 8888 for reporting
- Plaspy listens on port 8888 for all device connections so the same port is used across different tracker models
- Devices may be pointed to the DNS name d.plaspy.com or directly to the server IP 54.85.159.138
- Cellular network fallbacks such as LTE M primary and EGPRS fallback affect link reliability but not the endpoint or port used to report to Plaspy
- Network level considerations like operator APN, firewall rules, and NAT can affect connectivity to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change which messages the R-12 sends and how events are encoded; always check the device firmware version when troubleshooting
- Hardware revisions and optional modules may affect available inputs and outputs such as immobilizer control or surge protection behavior
- Manufacturer settings can alter transport preference so confirm whether your units are set to TCP or UDP reporting
- Features like OTA updates or remote configuration require compatible device firmware and may depend on manufacturer provisioning
- Validate planned workflows against the manufacturer documentation to confirm that the R-12 exposes the events and telemetry your application requires
- When deploying at scale, test a sample unit end to end with Plaspy to confirm behavior before rolling out widely

## Why Protocol Understanding Matters

A practical understanding of the R-12 communication protocol helps with correct device setup, quicker troubleshooting, and more reliable long term operations when the tracker is used with Plaspy. Knowing how the device reports and what the platform expects reduces integration friction and operational surprises.

- Ensures the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 and using the intended transport
- Helps diagnose connectivity issues caused by cellular configuration, APN settings, or firewall rules
- Clarifies which events and telemetry are available for mapping, alerts, and automation in Plaspy
- Guides firmware update planning so OTA and configuration changes do not interrupt reporting
- Improves incident response by matching device reported states with Plaspy alerts and logs

## Why Use Plaspy with This Protocol

Using the ArkNav R-12 with Plaspy provides fleet managers and system integrators with reliable visibility and telemetry for vehicles and heavy equipment. The combination of LTE M connectivity with EGPRS fallback, vehicle grade power protection, and event rich reporting makes the R-12 well suited for ignition aware tracking, anti theft workflows, and operational monitoring, while Plaspy ingests that data to provide mapping, alerts, and reporting.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and hardware revisions consult the manufacturer website https://www.arknavgps.com.tw/ which has the definitive technical documentation and firmware information.

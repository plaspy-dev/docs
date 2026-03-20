---
slug: /supermate/d11/protocol
id: d11-protocol
sidebar_label: Protocol
title: Supermate - D11 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Supermate D11 GPS tracker and how it communicates with Plaspy shared connection settings
keywords:
  - Supermate D11 protocol
  - Supermate D11 GPS protocol
  - D11 tracker Plaspy
  - Supermate GPS tracker protocol
  - D11 communication protocol
  - Supermate D11 compatibility Plaspy
  - vehicle tracking D11
  - asset tracker D11 protocol
  - Plaspy device support
  - GPS tracker protocol guide
---

# Supermate - D11 Protocol

This page provides the public protocol context for using the Supermate D11 tracker with Plaspy. It describes how the device communicates at a high level, which connection endpoints Plaspy uses, and what aspects of the tracker reporting behavior are relevant to integration. The goal is to help technicians and fleet managers understand how the D11 exchanges tracking and alert data with a third party platform such as Plaspy without exposing private implementation details.

Plaspy uses a set of shared connection settings for supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, practical guidance rather than device internals.

## Protocol Overview

The communication protocol in this context is the method the D11 uses to report position, status, and alert information to a remote server. For Plaspy compatibility the protocol enables reliable delivery of location updates, periodic heartbeats, SOS notifications, and event data so the platform can present accurate and timely information to users and integrations.

- Carries location and timing information needed for mapping and geofencing
- Transmits event flags such as SOS, tamper, power changes, and boundary crossing
- Allows the server to identify the device and associate reports with an account
- Supports periodic reporting and on demand updates depending on tracker settings
- Provides the transportable payload that Plaspy ingests and normalizes for display and alerts

## How Plaspy Detects the Protocol

Plaspy receives reports on a shared endpoint and port and performs automatic protocol detection when the device connects and sends data. In most cases a D11 correctly configured to report to Plaspy requires no manual protocol selection inside the platform.

- Plaspy accepts device connections at the public server domain d.plaspy.com
- The Plaspy server is also reachable at the public IP 54.85.159.138
- Plaspy uses a single port for device reporting across all supported trackers
- Plaspy automatically detects the tracker protocol once a device reports to the endpoint
- Users typically only need to set the tracker to report to the Plaspy endpoint and ensure the correct transport is selected on the device

## Transport and Connection Context

The D11 can be pointed at the Plaspy endpoint using either of the supported transport options. Whether the device uses UDP or TCP depends on the tracker firmware and configuration. Plaspy listens for incoming device traffic on a single port which simplifies configuration across device types.

- Devices may be configured to use UDP on port 8888 for lightweight reporting
- Devices may alternatively use TCP on port 8888 if the firmware supports it
- Devices can be configured to send to d.plaspy.com or directly to 54.85.159.138
- All devices in Plaspy use the same port which reduces per model configuration
- Confirm the chosen transport mode matches the D11 firmware settings and network environment

## Protocol Compatibility Notes

- Firmware versions can change available reporting options and message cadence
- Hardware revisions or regional variants may enable or disable certain signals
- Manufacturer configuration commands and default server settings vary by model
- Choosing UDP versus TCP affects reliability and behavior under varying mobile networks
- Validate device reporting parameters against official manufacturer documentation
- Network conditions and SIM profile can influence how reports are delivered to Plaspy
- Confirm power management settings to ensure expected heartbeat and sleep behavior

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure the D11 reports reliably to Plaspy and that alerts and location updates are interpreted correctly. Clear protocol knowledge reduces setup time and helps diagnose connectivity or data issues when they arise.

- Speeds up device commissioning by matching device server and transport settings
- Helps identify whether missing data is a device, SIM, or network issue
- Informs decisions on reporting intervals and power management for battery life
- Improves geofence and SOS reliability by aligning tracker event configuration with server expectations
- Aids in coordinating firmware updates and compatibility checks with the manufacturer

## Why Use Plaspy with This Protocol

Using the Supermate D11 with Plaspy gives organizations a straightforward path to realtime tracking, geofence monitoring, and emergency alert handling within a single platform. Plaspy's shared connection settings and automatic protocol detection reduce configuration complexity so deployments can scale with fewer model specific steps.

Learn more about Plaspy and how it handles device connectivity at https://www.plaspy.com. For the most current device specific protocol behavior and firmware details verify the latest information on the manufacturer site at http://www.gps-summit.com/ which may change over time.

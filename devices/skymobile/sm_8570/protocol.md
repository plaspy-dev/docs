---
slug: /skymobile/sm_8570/protocol
id: sm_8570-protocol
sidebar_label: Protocol
title: SkyMobile - SM-8570 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for SkyMobile SM-8570 GPS tracker and how it communicates with Plaspy using shared connection settings
keywords:
  - SkyMobile SM-8570 protocol
  - SM-8570 GPS protocol
  - SkyMobile tracker protocol
  - SM-8570 Plaspy compatibility
  - GPS tracker communication
  - vehicle tracking SM-8570
  - asset tracker SkyMobile
  - tracker protocol guide
  - Plaspy device compatibility
  - remote tracking protocol
---

# SkyMobile - SM-8570 Protocol

This page describes the public protocol context for using the SkyMobile SM-8570 GPS tracker with Plaspy. It summarizes how the device communicates with a remote tracking server, which data flows are relevant for integration, and what aspects are handled by Plaspy to accept and parse incoming reports from this model.

The SM-8570 is a quad band GSM portable locator with strong GPS sensitivity and features such as an integrated UBLOX chipset, motion sensor, and long standby times. The device can send position reports via IP or SMS and is described by the manufacturer as using the @Track communications protocol. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer configuration.

## Protocol Overview

The protocol used by the SM-8570 is the set of messages and transport choices the device uses to report location, status, and sensor data to a server. In practical terms for integration, the protocol determines how the tracker identifies itself, how frequently it reports, and which fields are included in each report.

- Enables the tracker to transmit GPS position and device state to a remote server so platforms like Plaspy can process and display location data.
- Carries device identifiers and status fields that allow the server to associate reports with the correct asset and account.
- Supports alternative delivery methods such as IP reporting to a server endpoint or SMS delivery when configured by the integrator.
- Interacts with the device power and motion features to reduce reporting frequency when stationary and conserve battery life.
- May include manufacturer specific extensions or optional sensor fields depending on firmware and configuration.

## How Plaspy Detects the Protocol

Plaspy provides a single public endpoint and port for device reporting and performs automatic protocol detection so users typically do not need to choose a protocol manually. When a properly configured SM-8570 points its reporting destination to the Plaspy endpoint, the platform will identify the incoming format and route data into the correct processing flow.

- Plaspy server domain is d.plaspy.com and the platform also accepts connections to 54.85.159.138.
- The port used by Plaspy for all supported devices is 8888.
- The device may be configured to use either UDP or TCP on port 8888 depending on device support and settings.
- All devices in Plaspy use the same port, simplifying device setup and firewall configuration.
- Plaspy automatically detects the tracker protocol, so a correctly directed report is usually processed without manual protocol selection.

## Transport and Connection Context

Connection choices determine how the SM-8570 reaches the network and where it sends its reports. For Plaspy integration, focus on the server endpoint and the transport protocol the device is set to use, since those are the parameters that need to point to Plaspy for automatic handling.

- The SM-8570 can deliver reports via IP when configured, and that IP transport may use UDP or TCP.
- For Plaspy reporting, devices may point to the domain name d.plaspy.com or directly to the IP address 54.85.159.138.
- The shared Plaspy port for device reporting is 8888 and is used by all supported trackers.
- Choose UDP if low overhead and reduced latency are preferred and the device supports it; choose TCP for reliable delivery where the device implements it.
- Ensure network firewalls allow outbound traffic from the device to the listed Plaspy endpoint and port.

## Protocol Compatibility Notes

- Manufacturer firmware revisions can change message contents, field order, or optional features; always check firmware notes for differences.
- Hardware revisions and optional modules may add or remove sensors and associated report fields that affect downstream parsing.
- The SM-8570 supports both IP reporting and SMS; SMS delivery is useful where IP connectivity is not available but requires separate handling outside the IP endpoint.
- Transport selection (UDP vs TCP) may be limited by device firmware or operator network behavior and can influence delivery characteristics.
- Plaspy automatically detects protocol variants when the device points at the platform endpoint, but correct device configuration is required.
- For precise command sets, encryption options, or manufacturer specific settings consult SkyMobile documentation.

## Why Protocol Understanding Matters

Knowing how the SM-8570 communicates helps ensure reliable setup, faster troubleshooting, and predictable operation once devices are deployed with Plaspy. Even with automatic detection, practical familiarity with the protocol and transport options reduces setup friction and helps identify connectivity issues.

- Confirms correct server endpoint and port settings on the device so reports reach Plaspy without manual mapping.
- Helps diagnose network issues such as blocked ports, UDP packet loss, or roaming behavior that affects reporting.
- Guides expectations for battery life and reporting cadence when motion sensor and power management features are active.
- Aids in validating that firmware or configuration changes did not alter required fields that Plaspy needs to match devices to accounts.
- Supports planning for fallbacks such as SMS reporting or alternate transports in low connectivity environments.

## Why Use Plaspy with This Protocol

Using the SM-8570 with Plaspy gives organizations a practical way to collect and visualize location and status reports from a device designed for portable asset tracking. Plaspy’s single endpoint and automatic protocol detection reduce initial setup complexity so operations teams can focus on deployment, monitoring, and rules rather than low level parsing details.

If you want to learn more about how Plaspy works with devices like the SkyMobile SM-8570, visit https://www.plaspy.com to review platform capabilities and integration options. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol and firmware information on the SkyMobile website at http://www.skymobile.com.co.

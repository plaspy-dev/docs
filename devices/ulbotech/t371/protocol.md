---
slug: /ulbotech/t371/protocol
id: t371-protocol
sidebar_label: Protocol
title: Ulbotech - T371 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Ulbotech T371 integration with Plaspy including connection settings and compatibility guidance
keywords:
  - Ulbotech T371 protocol
  - Ulbotech T371 GPS protocol
  - Ulbotech T371 communication protocol
  - Ulbotech T371 tracking protocol
  - Ulbotech GPS tracker protocol
  - T371 OBD II protocol
  - Plaspy compatible trackers
  - Plaspy device protocol
  - vehicle tracking T371
  - fleet management GPS protocol
---

# Ulbotech - T371 Protocol

This page describes the public protocol context for using the Ulbotech T371 tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in general, what connection settings are used publicly, and what aspects of the protocol are important for successful integration and troubleshooting without exposing vendor private internals.

The Ulbotech T371 is an OBD II GPS tracker that combines Telit cellular connectivity and a u‑blox GNSS engine to deliver location and vehicle telemetry to Plaspy. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. Review manufacturer documentation where device specific details are required.

## Protocol Overview

The communication protocol for the T371 governs how the device reports GNSS positions, OBD telematics, and event flags to a remote server and how remote commands or updates are coordinated. At a high level, the protocol enables reliable delivery of location and vehicle data from the tracker to Plaspy and supports the device features that fleet managers rely on.

- Provides identification and session context so Plaspy can associate incoming data with the correct device and account.
- Transmits GNSS position reports and timestamps for real time location and historical playback in Plaspy.
- Delivers OBD and CAN telemetry such as RPM, speed, coolant temperature, fuel metrics, and diagnostic trouble codes.
- Encodes accelerometer and status events so Plaspy can trigger alerts and scoring for driver behaviour and security.
- Supports remote management signals that enable firmware updates, APN identification, and occasional configuration changes.
- Operates over standard cellular connections so device availability depends on network coverage and APN settings.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a shared endpoint and port and includes automatic protocol detection for supported trackers, including the T371. When the device is correctly configured to report to the Plaspy endpoint, the platform will typically recognize the device protocol without requiring manual protocol selection by the user.

- Plaspy uses a common server endpoint to receive device reports so setup focuses on the device side configuration.
- All devices in Plaspy use the same port which simplifies device registration and network rules.
- Plaspy automatically detects the tracker protocol when the device begins reporting to the platform.
- In most cases you do not need to select a protocol inside Plaspy if the tracker is configured to send data to the Plaspy endpoint.
- If a device does not appear to be detected, verifying device APN, server address, and transport selection is the first troubleshooting step.
- Keep firmware and device settings aligned with manufacturer guidance to ensure consistent detection by Plaspy.

## Transport and Connection Context

The T371 sends its telemetry over cellular networks to the Plaspy endpoint. Depending on device configuration and firmware, the tracker may send data using either UDP or TCP on the same port Plaspy listens to for all devices. Plaspy provides a public endpoint and IP that are commonly used in device configuration.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and network conditions.
- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device connection settings.
- All devices in Plaspy use the same port which simplifies firewall and mobile operator rules.
- The device may be configured using UDP or TCP on port 8888 to send telemetry and event data to Plaspy.
- Cellular APN, signal quality, and SIM provisioning affect connectivity and reporting frequency.
- Remote features such as FOTA and time zone or APN detection require a reliable transport to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change message behaviors and available features; confirm compatibility for the specific firmware installed on T371 units.
- Different hardware revisions or regional variants of the T371 can affect supported OBD/CAN signals and telemetry availability.
- Manufacturer-side configuration options may select TCP or UDP transport; ensure the device is pointed to the Plaspy endpoint and correct transport.
- Some OBD parameters depend on vehicle make and model and on CAN bus availability, not just the tracker.
- Validate that remote management features such as FOTA are enabled and tested before wide deployment.
- When in doubt, consult the T371 product documentation for device specific configuration examples and APN recommendations.
- Confirm any regional regulatory or network operator constraints that might impact cellular connectivity.

## Why Protocol Understanding Matters

Understanding how the T371 communicates with Plaspy helps ensure reliable installation, correct data mapping, and faster troubleshooting when devices do not behave as expected. Clear expectations about transport, reporting cadence, and the kinds of telemetry sent improve deployment success and long term operational reliability.

- Helps confirm device is pointing to the correct Plaspy endpoint and using the supported transport.
- Enables accurate mapping of OBD and CAN parameters into Plaspy dashboards and analytics.
- Improves troubleshooting steps for connectivity issues, including verifying APN and signal status.
- Informs decisions about reporting intervals and event rules to balance data granularity and cellular costs.
- Supports validation of FOTA and remote commands to avoid interruptions to fleet operation.
- Assists with regulatory and operational planning where device behavior depends on firmware or vehicle integration.

## Why Use Plaspy with This Protocol

Using the Ulbotech T371 with Plaspy provides centralized visibility into vehicle location, engine and diagnostics telemetry, and event driven alerts that fleets and service providers rely on. The T371’s OBD II form factor and rich telemetry set make it well suited to fleet tracking, rental programs, insurance telematics, and anti theft workflows when paired with a platform that ingests and normalizes vehicle data.

Plaspy streamlines device reception by using a shared server endpoint and automatic protocol detection so fleet operators can focus on alerts, reporting, and operational workflows rather than low level protocol configuration. To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific information on the manufacturer website http://www.ulbotech.com/ before large scale deployments.

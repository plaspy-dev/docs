---
slug: /queclink/gb130mg/protocol
id: gb130mg-protocol
sidebar_label: Protocol
title: QuecLink - GB130MG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the QuecLink GB130MG with Plaspy servers and connection expectations
keywords:
  - QuecLink GB130MG protocol
  - GB130MG GPS protocol
  - QuecLink GPS tracker protocol
  - GB130MG Plaspy compatibility
  - QuecLink tracking protocol
  - vehicle tracking GB130MG
  - GB130MG telematics protocol
  - Plaspy device protocol
  - fleet GPS GB130MG
  - UBI telematics GB130MG
---

# QuecLink - GB130MG Protocol

This page covers the public protocol context for using the QuecLink GB130MG tracker with the Plaspy platform. It explains how the device reports location, motion, and accessory telemetry to Plaspy in general terms and how that communication fits into a typical fleet or UBI deployment. The content is intended to help technical integrators and operations teams understand connection expectations without exposing device internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on publicly safe and practical guidance for successful integration and troubleshooting.

## Protocol Overview

The communication protocol for the GB130MG governs how the tracker identifies itself, establishes a transport session, and delivers GNSS positions, motion events, and accessory telemetry to a backend server. In practice, the protocol enables the device to provide the high-fidelity location and accelerometer data described in the device documentation while preserving device-specific reporting options and event semantics.

- Enables the tracker to report GNSS positions, time stamps, and device telemetry to a backend service.
- Carries motion and event data from the 6-axis accelerometer for crash detection and incident reporting.
- Transports BLE accessory telemetry so sensor readings can be correlated with location and time.
- Conveys device identity and status information that the backend uses for mapping, alerts, and historical reporting.
- Supports configurable reporting modes and intervals that affect power use and data granularity.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port and uses the incoming data to recognize the device and its reporting behavior. When a GB130MG is configured to report to Plaspy, the platform will automatically detect the tracker protocol so you normally do not need to select a protocol manually inside Plaspy.

- Configure the device to report to the Plaspy server address d.plaspy.com or to the Plaspy server IP 54.85.159.138.
- Plaspy listens on port 8888 and will accept tracker connections on that port.
- The platform automatically detects the tracker protocol from the reported traffic and device identity when a properly configured device connects.
- In most deployments the user configures the tracker to point to the Plaspy endpoint and no further protocol selection inside the platform is required.
- If a device does not appear, verify the device reporting address, transport selection, and firmware configuration with manufacturer documentation.

## Transport and Connection Context

Transport selection and network configuration determine how the GB130MG reaches Plaspy but do not change the general purpose of the protocol. The device may be configured to use UDP or TCP on port 8888 depending on device support, carrier environment, and deployment preferences.

- GB130MG devices can be set to use either UDP or TCP transport when reporting to Plaspy on port 8888.
- Devices may be pointed to the domain d.plaspy.com or the direct server address 54.85.159.138.
- Plaspy uses the same port for all supported devices, simplifying firewall and NAT configuration for large rollouts.
- Choose the transport that best fits your network reliability and data ordering needs; consult carrier and device documentation for recommended settings.
- Ensure network and firewall rules allow outbound connections to the Plaspy endpoint on port 8888 for both TCP and UDP as required.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, and available telemetry. Always validate against the device firmware release notes.
- Hardware revisions or regional SKUs may alter radio behavior, BLE attachments, or supported transport modes.
- Transport selection (UDP vs TCP) may affect message delivery characteristics and should be tested in your target network environment.
- BLE accessory integration requires accessory pairing and may have additional configuration steps not controlled by Plaspy.
- Carrier APN and SIM provisioning affect how the device reaches the internet; confirm carrier settings during deployment.
- Validate any integration that depends on accelerometer event timing or pre event capture against manufacturer documentation to ensure forensic accuracy.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable data ingestion, correct event interpretation, and smoother troubleshooting during deployment and operation. Knowing how the device reports and what it reports makes it easier to configure the device, interpret telemetry in Plaspy, and diagnose connectivity issues.

- Helps verify device configuration so the tracker reports to d.plaspy.com or the Plaspy server IP on port 8888.
- Aids in troubleshooting transport issues when TCP or UDP selection affects delivery.
- Clarifies how sensor data like GNSS and accelerometer events will appear in platform telemetry.
- Improves rollout planning by highlighting firmware and hardware factors that can affect behavior.
- Reduces time to resolution by focusing diagnostics on transport, server address, and firmware version.

## Why Use Plaspy with This Protocol

Using the GB130MG with Plaspy provides a practical path to ingesting high-fidelity GNSS, accelerometer, and BLE sensor data at scale. For fleets and insurers, combining the GB130MG’s rugged design and high-rate motion sensing with Plaspy’s protocol detection and ingestion simplifies large deployments and ongoing operations, enabling real-time maps, alerts, and analytics.

Plaspy’s shared endpoint model and automatic protocol detection reduce per-device configuration during rollouts, and the platform’s support for the same port across devices makes network provisioning consistent for large fleets. To learn more about Plaspy and how it supports device integration visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer guidance verify information on the official QuecLink website https://www.queclink.com/
